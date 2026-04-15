from flask import Flask, request, jsonify

app = Flask(__name__)

# In-memory storage
students = []
next_id = 1


# -------------------------------
# CREATE Student
# -------------------------------
@app.route('/students', methods=['POST'])
def create_student():
    global next_id

    data = request.get_json()

    if not data or not data.get("name") or not data.get("age") or not data.get("course"):
        return jsonify({"error": "Invalid input"}), 400

    student = {
        "id": next_id,
        "name": data["name"],
        "age": data["age"],
        "course": data["course"]
    }

    students.append(student)
    next_id += 1

    return jsonify(student), 201


# -------------------------------
# READ All Students
# -------------------------------
@app.route('/students', methods=['GET'])
def get_students():
    return jsonify(students), 200


# -------------------------------
# READ Single Student
# -------------------------------
@app.route('/students/<int:student_id>', methods=['GET'])
def get_student(student_id):
    student = next((s for s in students if s["id"] == student_id), None)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    return jsonify(student), 200


# -------------------------------
# UPDATE Student
# -------------------------------
@app.route('/students/<int:student_id>', methods=['PUT'])
def update_student(student_id):
    data = request.get_json()
    student = next((s for s in students if s["id"] == student_id), None)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    student["name"] = data.get("name", student["name"])
    student["age"] = data.get("age", student["age"])
    student["course"] = data.get("course", student["course"])

    return jsonify(student), 200


# -------------------------------
# DELETE Student
# -------------------------------
@app.route('/students/<int:student_id>', methods=['DELETE'])
def delete_student(student_id):
    global students

    student = next((s for s in students if s["id"] == student_id), None)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    students = [s for s in students if s["id"] != student_id]

    return jsonify({"message": "Student deleted successfully"}), 200


if __name__ == '__main__':
    app.run(debug=True)