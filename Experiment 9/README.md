Experiment 9 - Token Based Authentication

Technologies Used:-
- Python
- Flask
- PyJWT
- Postman

APIs Implemented:-

1. Basic Authentication
Endpoint: /basic-auth
Method: GET

2. Custom Header Authentication
Endpoint: /custom-auth
Method: GET

Headers:
X-Username
X-Password

3. JWT Authentication
Login Endpoint: /login (POST)
Protected Endpoint: /jwt-protected (GET)

How to Run:-

1. Create virtual environment
2. Install requirements:
   pip install -r requirements.txt
3. Run:
   python app.py

Server runs on:
http://127.0.0.1:5000

Screenshots:- ![Basic Auth](<Screenshot (177).png>)
![Custom Header Auth](<Screenshot (178).png>)
![Token](<Screenshot (179).png>)
![JWT Authentication](<Screenshot (180).png>)
