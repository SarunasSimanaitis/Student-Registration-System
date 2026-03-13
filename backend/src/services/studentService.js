const Student = require("../models/Student");
const Subject = require("../models/Subject");

const createStudent = async (studentData) => {
  return await Student.create(studentData);
};

const getAllStudents = async (filters) => {
  const query = {};

  if (filters.course) {
    query.course = Number(filters.course);
  }

  if (filters.search) {
    const searchRegex = new RegExp(filters.search, "i");

    query.$or = [
      { firstName: searchRegex },
      { lastName: searchRegex }
    ];
  }

  return await Student.find(query).sort({ createdAt: -1 });
};

const getStudentById = async (id) => {
  return await Student.findById(id);
};

const updateStudent = async (id, updatedData) => {
  return await Student.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true
  });
};

const deleteStudent = async (id) => {
  await Subject.deleteMany({ student: id });
  return await Student.findByIdAndDelete(id);
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
};