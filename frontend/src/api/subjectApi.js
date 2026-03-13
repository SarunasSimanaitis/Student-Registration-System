const API_URL = "http://localhost:5000/api/subjects";

export const createSubject = async (subjectData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(subjectData)
  });

  return await response.json();
};

export const updateSubject = async (id, subjectData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(subjectData)
  });

  return await response.json();
};

export const deleteSubject = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  return await response.json();
};