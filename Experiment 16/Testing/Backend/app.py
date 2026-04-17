from flask import Flask, request, jsonify

app = Flask(__name__)

students = []
current_id = 1


# CREATE student
@app.route("/students", methods=["POST"])
def create_student():
    global current_id

    data = request.get_json()

    student = {
        "id": current_id,
        "name": data["name"]
    }

    students.append(student)
    current_id += 1

    return jsonify(student), 201


# GET all students
@app.route("/students", methods=["GET"])
def get_students():
    return jsonify(students), 200


# GET single student
@app.route("/students/<int:student_id>", methods=["GET"])
def get_student(student_id):

    for student in students:
        if student["id"] == student_id:
            return jsonify(student), 200

    return jsonify({"error": "Student not found"}), 404


# UPDATE student
@app.route("/students/<int:student_id>", methods=["PUT"])
def update_student(student_id):

    data = request.get_json()

    for student in students:
        if student["id"] == student_id:
            student["name"] = data["name"]
            return jsonify(student), 200

    return jsonify({"error": "Student not found"}), 404


# DELETE student
@app.route("/students/<int:student_id>", methods=["DELETE"])
def delete_student(student_id):

    for student in students:
        if student["id"] == student_id:
            students.remove(student)
            return jsonify({"message": "Student deleted"}), 200

    return jsonify({"error": "Student not found"}), 404


if __name__ == "__main__":
    app.run(debug=True)