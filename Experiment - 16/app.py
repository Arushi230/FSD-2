from flask import Flask, request, jsonify

app = Flask(__name__)

students = []

@app.route("/students", methods=["POST"])
def create_student():
    data = request.get_json()
    student = {"name": data["name"]}
    students.append(student)
    return jsonify(student), 201

@app.route("/students", methods=["GET"])
def get_students():
    return jsonify(students), 200

if __name__ == "__main__":
    app.run(debug=True) 
    