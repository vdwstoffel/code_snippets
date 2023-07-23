import smtplib
import ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import os

load_dotenv(dotenv_path='../.env')

sender_email = os.getenv('SENDER_EMAIL')
receiver_email = os.getenv('RECEIVER_EMAIL')
password = os.getenv('EMAIL_PASSWORD')
port = 465  # For SSL


# Construct the email
message = MIMEMultipart("alternative")
message["Subject"] = "Python Email Test"
message["From"] = sender_email
message["To"] = receiver_email

# Create the plain-text and HTML version of your message
html = """\
<html>
  <body>
    <h1>Python Test Mail</h1><br>
    <p>Link to <a href='www.google.com'>google</a></p>
  </body>
</html>
"""

# Turn these into plain/html MIMEText objects
message_body = MIMEText(html, "html")
# Add HTML/plain-text parts to MIMEMultipart message
# The email client will try to render the last part first
message.attach(message_body)

# Create secure connection with server and send email
# Create a secure SSL context
context = ssl.create_default_context()

with smtplib.SMTP_SSL("smtp.gmail.com", port, context=context) as server:
    server.login(sender_email, password)
    server.sendmail(
        sender_email, receiver_email, message.as_string()
    )