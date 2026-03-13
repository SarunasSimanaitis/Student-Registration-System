const subjectService = require("../services/subjectService");

const createSubject = async (req, res) => {
  const subject = await subjectService.createSubject(req.body);

  if (!subject) {
    return res.status(404).json({ message: "Studentas nerastas" });
  }

  res.status(201).json(subject);
};

const updateSubject = async (req, res) => {
  const updatedSubject = await subjectService.updateSubject(req.params.id, req.body);

  if (!updatedSubject) {
    return res.status(404).json({ message: "Dalykas nerastas" });
  }

  res.json(updatedSubject);
};

const deleteSubject = async (req, res) => {
  const deletedSubject = await subjectService.deleteSubject(req.params.id);

  if (!deletedSubject) {
    return res.status(404).json({ message: "Dalykas nerastas" });
  }

  res.json({ message: "Dalykas ištrintas" });
};

module.exports = {
  createSubject,
  updateSubject,
  deleteSubject
};