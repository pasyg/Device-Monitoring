from clients.gemini import GeminiClient
from vector_db.chromadb import setup_chroma
from vector_db.schema_ex import extract_schema
from vector_db.ex_query import execute_query
from vector_db.embedding import vectorize_schema, retrieve_schema

from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import os
from pathlib import Path

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173",
                   "http://frontend"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    message: str

# Prompt types:
#   "sql_query"
#   "data_question"
#   "anomaly_detection"

default_db_path = "../backend/device_api/devicemonitor.db"
db_path = os.getenv("DB_PATH", default_db_path)
absolute_db_path = Path(db_path).resolve()

@app.post("/sqlquery")
def run_sql_query(data: Message):
    user_prompt = data.message # User Input Prompt
    print(f"Received query: {data.message}\n\n")
    print(f"{absolute_db_path}\n\n")

    # Set up VectorDB 
    db_client, db_collection = setup_chroma()
    
    # Set up LLM client
    llm_client = GeminiClient()

    # Vectorize schemas into VectorDB
    schema_tables = extract_schema(absolute_db_path)
    print(f"Database scheme: {schema_tables}\n\n")
    vectorize_schema(schema_tables, db_collection)

    # Retrieve most fitting context based on user prompt
    retrieved_schema = retrieve_schema(user_prompt, db_collection)

    # Adjust the database context of prompt generation
    llm_client.change_dbcontext(retrieved_schema)
    
    # Generate full SQL Query
    query = llm_client.generate_sql_query(user_prompt)
    # query = "SELECT * FROM Devices;"
    print(f"Generated query: {query}\n\n")
    # Execute the query on the database
    sql_execute = execute_query(absolute_db_path, query)

    print("Send to frontend...")

    return {
        "query": query,
        "sql_execute": sql_execute
    }

    '''
    Next:
        - LLM Response in frontend 
            - SQL Query:
            - Query Result:
    '''