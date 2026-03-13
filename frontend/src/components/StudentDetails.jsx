import SubjectForm from "./SubjectForm";
import SubjectList from "./SubjectList";

function StudentDetails({ selectedStudentData, onAddSubject, onDeleteSubject }) {
  if (!selectedStudentData || !selectedStudentData.student) {
    return (
      <section className="card" aria-labelledby="details-title">
        <h2 id="details-title">Studento informacija</h2>
        <p>Pasirink studentą iš sąrašo.</p>
      </section>
    );
  }

  const { student, subjects } = selectedStudentData;

  return (
    <section className="card" aria-labelledby="details-title">
      <h2 id="details-title">Studento informacija</h2>

      <article>
        <p>
          <strong>Vardas:</strong> {student.firstName}
        </p>
        <p>
          <strong>Pavardė:</strong> {student.lastName}
        </p>
        <p>
          <strong>Kursas:</strong> {student.course}
        </p>
      </article>

      <SubjectForm studentId={student._id} onAddSubject={onAddSubject} />
      <SubjectList subjects={subjects} onDeleteSubject={onDeleteSubject} />
    </section>
  );
}

export default StudentDetails;