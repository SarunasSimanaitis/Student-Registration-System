const API_URL = "http://localhost:5000/api/students";

export const getStudents = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${API_URL}${query ? `?${query}` : ""}`);
  return await response.json();
};

export const getStudentById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};

export const createStudent = async (studentData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(studentData)
  });

  return await response.json();
};

export const updateStudent = async (id, studentData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(studentData)
  });

  return await response.json();
};

export const deleteStudent = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  return await response.json();
};