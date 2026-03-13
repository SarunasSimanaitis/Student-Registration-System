const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Dalyko pavadinimas yra privalomas"],
      trim: true,
      minlength: [2, "Dalyko pavadinimas turi būti bent 2 simbolių"],
      maxlength: [100, "Dalyko pavadinimas negali būti ilgesnis nei 100 simbolių"]
    },
    credits: {
      type: Number,
      required: [true, "Kreditų skaičius yra privalomas"],
      min: [1, "Kreditų skaičius turi būti bent 1"],
      max: [30, "Kreditų skaičius negali būti didesnis nei 30"]
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: [true, "Studento ID yra privalomas"]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Subject", subjectSchema);