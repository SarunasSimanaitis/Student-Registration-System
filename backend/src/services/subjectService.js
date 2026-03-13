const Subject = require("../models/Subject");
const Student = require("../models/Student");

const createSubject = async (subjectData) => {
  const existingStudent = await Student.findById(subjectData.student);

  if (!existingStudent) {
    return null;
  }

  return await Subject.create(subjectData);
};

const getSubjectsByStudentId = async (studentId) => {
  return await Subject.find({ student: studentId }).sort({ createdAt: -1 });
};

const updateSubject = async (id, updatedData) => {
  return await Subject.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true
  });
};

const deleteSubject = async (id) => {
  return await Subject.findByIdAndDelete(id);
};

module.exports = {
  createSubject,
  getSubjectsByStudentId,
  updateSubject,
  deleteSubject
};