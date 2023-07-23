from dotenv import load_dotenv      # pip install python-dotenv
load_dotenv(dotenv_path='../.env')
import os

print(os.getenv('DB_PASSWORD'))