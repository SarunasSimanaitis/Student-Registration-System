import { useEffect, useState } from "react";
import {
  getStudents,
  getStudentById,
  createStudent,
  deleteStudent
} from "./api/studentApi";
import { createSubject, deleteSubject } from "./api/subjectApi";
import StudentForm from "./components/StudentForm";
import StudentFilters from "./components/StudentFilters";
import StudentList from "./components/StudentList";
import StudentDetails from "./components/StudentDetails";
import "./index.css";

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudentData, setSelectedStudentData] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    course: ""
  });

  const loadStudents = async () => {
    const data = await getStudents(filters);
    setStudents(data);
  };

  useEffect(() => {
    loadStudents();
  }, [filters.search, filters.course]);

  const handleAddStudent = async (studentData) => {
    await createStudent(studentData);
    await loadStudents();
  };

  const handleSelectStudent = async (id) => {
    const data = await getStudentById(id);
    setSelectedStudentData(data);
  };

  const handleDeleteStudent = async (id) => {
    await deleteStudent(id);

    if (selectedStudentData?.student?._id === id) {
      setSelectedStudentData(null);
    }

    await loadStudents();
  };

  const handleAddSubject = async (subjectData) => {
    await createSubject(subjectData);

    if (selectedStudentData?.student?._id) {
      const updatedData = await getStudentById(selectedStudentData.student._id);
      setSelectedStudentData(updatedData);
    }
  };

  const handleDeleteSubject = async (id) => {
    await deleteSubject(id);

    if (selectedStudentData?.student?._id) {
      const updatedData = await getStudentById(selectedStudentData.student._id);
      setSelectedStudentData(updatedData);
    }
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      search: "",
      course: ""
    });
  };

  return (
    <main className="container">
      <header className="page-header">
        <h1>Studentų registracijos sistema</h1>
        <p>React, Node.js ir MongoDB pagrindu sukurta sistema.</p>
      </header>

      <div className="layout">
        <div className="left-column">
          <StudentForm onAddStudent={handleAddStudent} />
          <StudentFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />
          <StudentList
            students={students}
            onSelectStudent={handleSelectStudent}
            onDeleteStudent={handleDeleteStudent}
          />
        </div>

        <div className="right-column">
          <StudentDetails
            selectedStudentData={selectedStudentData}
            onAddSubject={handleAddSubject}
            onDeleteSubject={handleDeleteSubject}
          />
        </div>
      </div>
    </main>
  );
}

export default App;