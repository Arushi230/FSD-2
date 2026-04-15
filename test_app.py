import pytest
from app import app

@pytest.fixture
def client():
    app.testing = True
    return app.test_client()

def test_create_student(client):
    response = client.post("/students", json={"name": "Student-1"})
    assert response.status_code == 201
    assert response.json["name"] == "Student-1"

def test_get_students(client):
    response = client.get("/students")
    assert response.status_code == 200