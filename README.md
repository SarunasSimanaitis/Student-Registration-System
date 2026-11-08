# Student Registration System

A small full-stack app for managing students and the subjects they take. You can add, edit and delete students, assign them subjects with credit points, and filter the list by year of study.

The app's interface is in Lithuanian.

## Built with

- **Frontend:** React 19, Vite
- **Backend:** Node.js, Express 5, Mongoose
- **Database:** MongoDB

## How it's organised

The backend is a REST API split into routes, controllers, services and models:

| Endpoint | What it does |
| --- | --- |
| `/api/students` | Create, list, view, update and delete students |
| `/api/subjects` | Create, update and delete subjects linked to a student |

The frontend talks to the API through one small module (`src/api/studentApi.js`), so the components never call `fetch` directly.

## Running it locally

You need Node.js and a MongoDB connection string.

```bash
# backend
cd backend
npm install
echo "MONGO_URI=your-mongodb-connection-string" > .env
npm run dev

# frontend (in a second terminal)
cd frontend
npm install
npm run dev
```

The API runs on `http://localhost:5000` and the frontend on the address Vite prints.
