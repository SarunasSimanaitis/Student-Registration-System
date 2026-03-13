function SubjectList({ subjects, onDeleteSubject }) {
  return (
    <section aria-labelledby="subject-list-title">
      <h3 id="subject-list-title">Studento dalykai</h3>

      {subjects.length === 0 ? (
        <p>Dalykų nėra.</p>
      ) : (
        <ul>
          {subjects.map((subject) => (
            <li key={subject._id}>
              <strong>{subject.name}</strong> - {subject.credits} kreditai
              <button type="button" onClick={() => onDeleteSubject(subject._id)}>
                Ištrinti
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default SubjectList;