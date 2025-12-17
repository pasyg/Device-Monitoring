import sqlite3

def extract_schema(db_path: str) -> list[str]:
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name IN ('DeviceReadings', 'Devices');")
    tables = [row[0] for row in cursor.fetchall()]

    schemas = []

    for table in tables:
        cursor.execute(f"PRAGMA table_info({table});")
        columns = cursor.fetchall()

        schema_text = f"Table: {table}\n"
        for col in columns:
            col_id, name, col_type, notnull, default, pk = col
            schema_text += f" - {name} ({col_type})\n"
            if pk: schema_text += "   - Primary Key\n"
            if notnull: schema_text += "   - Not Null\n"
        schemas.append({
            "table_name": table,
            "schema_text": schema_text
        })

    conn.close()
    return schemas