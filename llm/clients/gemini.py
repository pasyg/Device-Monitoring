import os
from dotenv import load_dotenv
from google import genai

from .client import LLMClient

load_dotenv()

class GeminiClient(LLMClient):
    def __init__(self):
        self.client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
        self.model  = "gemini-2.5-flash"

    def change_model(self, model_name: str):
        # test if model exists
        self.model = model_name

    def generate_text(self, prompt: str) -> str:
        response = self.client.models.generate_content(
            model = self.model,
            contents = prompt
        )
        return response.text
    
    def generate_sql_query(self, prompt: str) -> str:
        self.change_prompt("sql_query")
        total_prompt = f"{self.prompt}\nDatabase context:\n{self.dbcontext}\n\n{prompt}"
        response = self.client.models.generate_content(
            model = self.model,
            contents = total_prompt
        )
        return response.text
    
    def generate_data_answer(self, prompt: str) -> str:
        self.change_prompt("data_question")

        response = self.client.models.generate_content(
            model = self.model,
            contents = f"{self.prompt}\nDatabase context:\n{self.dbcontext}\n\n{prompt}"
        )
        return response.text
    
    def generate_anomaly_report(self, prompt: str) -> str:  
        self.change_prompt("anomaly_detection")
        
        response = self.client.models.generate_content(
            model = self.model,
            contents = f"{self.prompt}\nDatabase context:\n{self.dbcontext}\n\n{prompt}"
        )
        return response.text
    