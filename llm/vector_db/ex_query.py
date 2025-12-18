import sqlite3

def execute_query(db_path: str, query: str):
    try:
        conn = sqlite3.connect(db_path)
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        print(query)
        cursor.execute("PRAGMA journal_mode=WAL;")
        
        rows = cursor.execute(query).fetchall()
        
        return [dict(row) for row in rows]

    except Exception as e:
        return [{"Error": f"Invalid SQL generated: {str(e)}"}]
    finally:
        if 'conn' in locals():
            conn.close()
