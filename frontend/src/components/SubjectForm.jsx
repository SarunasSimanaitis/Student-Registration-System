import { useState } from "react";

function SubjectForm({ studentId, onAddSubject }) {
  const [formData, setFormData] = useState({
    name: "",
    credits: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.credits) {
      return;
    }

    await onAddSubject({
      ...formData,
      credits: Number(formData.credits),
      student: studentId
    });

    setFormData({
      name: "",
      credits: ""
    });
  };

  return (
    <section aria-labelledby="subject-form-title">
      <h3 id="subject-form-title">Pridėti dalyką</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="subjectName">Dalyko pavadinimas</label>
          <input
            id="subjectName"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="credits">Kreditai</label>
          <input
            id="credits"
            name="credits"
            type="number"
            min="1"
            max="30"
            value={formData.credits}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Pridėti dalyką</button>
      </form>
    </section>
  );
}

export default SubjectForm;