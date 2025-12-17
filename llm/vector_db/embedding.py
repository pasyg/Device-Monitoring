def vectorize_schema(schema_tables, db_collection):
    for schema in schema_tables:
        for table_name, schema_text in schema.items():
            db_collection.add(
                ids=[f"schema_{table_name}"],
                documents=[schema_text],
                metadatas=[{
                    "type": "schema",
                    "table": table_name
                }]
            )

def retrieve_schema(query, db_collection):
    results = db_collection.query(
        query_texts=[query],
        n_results=3
    )

    return results["documents"][0]