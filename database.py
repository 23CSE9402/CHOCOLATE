import pyodbc


def get_connection():

    con = pyodbc.connect(

        "DRIVER={ODBC Driver 17 for SQL Server};"
        "SERVER=103.207.1.91;"
        "DATABASE=CSE9402;"
        "UID=MZCET;"
        "PWD=MZCET@1234;"

    )

    return con
