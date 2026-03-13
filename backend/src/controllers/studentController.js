const studentService = require("../services/studentService");
const subjectService = require("../services/subjectService");

const createStudent = async (req, res) => {
  const student = await studentService.createStudent(req.body);
  res.status(201).json(student);
};

const getStudents = async (req, res) => {
  const students = await studentService.getAllStudents(req.query);
  res.json(students);
};

const getStudentById = async (req, res) => {
  const student = await studentService.getStudentById(req.params.id);

  if (!student) {
    return res.status(404).json({ message: "Studentas nerastas" });
  }

  const subjects = await subjectService.getSubjectsByStudentId(req.params.id);

  res.json({
    student,
    subjects
  });
};

const updateStudent = async (req, res) => {
  const updatedStudent = await studentService.updateStudent(req.params.id, req.body);

  if (!updatedStudent) {
    return res.status(404).json({ message: "Studentas nerastas" });
  }

  res.json(updatedStudent);
};

const deleteStudent = async (req, res) => {
  const deletedStudent = await studentService.deleteStudent(req.params.id);

  if (!deletedStudent) {
    return res.status(404).json({ message: "Studentas nerastas" });
  }

  res.json({ message: "Studentas ištrintas" });
};

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent
};