require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const studentRoutes = require("./routes/studentRoutes");
const subjectRoutes = require("./routes/subjectRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Studentų registracijos API veikia" });
});

app.use("/api/students", studentRoutes);
app.use("/api/subjects", subjectRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Kelias nerastas"
  });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Serveris paleistas: http://localhost:${PORT}`);
  });
};

startServer();