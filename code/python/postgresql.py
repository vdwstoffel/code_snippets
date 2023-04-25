# pip install psycopg2
import psycopg2      # https://pypi.org/project/psycopg2/


class PostgreSql():

    def __init__(self) -> None:

        self.user = "stoffel"
        self.password = "StoffelJossie"
        self.database = "examples"
        self.host = "localhost"

    def connect_to_database(self):
        """
        Establishes and active connection to the database and returns to connection
        """
        conn = psycopg2.connect(
            database=self.database,
            host=self.host,
            user=self.user,
            password=self.password
        )

        if conn:
            return conn
        else:
            raise Exception("Database connection failed")

    def get_all_users(self):
        '''
        This example will get all users from the database
        '''

        conn = self.connect_to_database()
        cur = conn.cursor()
        try:
            cur.execute('''
                    SELECT * FROM users;
            ''')
            query = cur.fetchall()
            conn.commit()
            conn.close()
            return query
        except Exception as e:
            print(e)
            conn.rollback()
            conn.close()

    def get_user(self, user):
        '''
        This example will use f-string to get a user
        '''
        conn = self.connect_to_database()
        cur = conn.cursor()
        try:
            cur.execute(f'''
                SELECT * FROM users
                WHERE username = '{user}';
            ''')
            query = cur.fetchone()
            conn.commit()
            conn.close()
            return query
        except Exception as e:
            print(e)
            conn.rollback()
            conn.close()


if __name__ == '__main__':
    db = PostgreSql()
    print(db.get_all_users())
    print(db.get_user('stoffel'))
