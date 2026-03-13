function StudentList({ students, onSelectStudent, onDeleteStudent }) {
  return (
    <section className="card" aria-labelledby="student-list-title">
      <h2 id="student-list-title">Studentų sąrašas</h2>

      {students.length === 0 ? (
        <p>Studentų nerasta.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Vardas</th>
              <th>Pavardė</th>
              <th>Kursas</th>
              <th>Veiksmai</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.course}</td>
                <td>
                  <button type="button" onClick={() => onSelectStudent(student._id)}>
                    Peržiūrėti
                  </button>
                  <button type="button" onClick={() => onDeleteStudent(student._id)}>
                    Ištrinti
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default StudentList;