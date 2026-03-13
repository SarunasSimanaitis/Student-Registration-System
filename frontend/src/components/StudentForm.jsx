import { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    course: ""
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

    if (!formData.firstName || !formData.lastName || !formData.course) {
      return;
    }

    await onAddStudent({
      ...formData,
      course: Number(formData.course)
    });

    setFormData({
      firstName: "",
      lastName: "",
      course: ""
    });
  };

  return (
    <section className="card" aria-labelledby="student-form-title">
      <h2 id="student-form-title">Pridėti studentą</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Vardas</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Pavardė</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Kursas</label>
          <input
            id="course"
            name="course"
            type="number"
            min="1"
            max="4"
            value={formData.course}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Pridėti studentą</button>
      </form>
    </section>
  );
}

export default StudentForm;