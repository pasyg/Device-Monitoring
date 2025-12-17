import sqlite3

def execute_query(db_path: str, query: str):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    print(query)
    cursor.execute("PRAGMA journal_mode=WAL;")
    return cursor.execute(query).fetchall()