const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Vardas yra privalomas"],
        trim: true,
        minlength: [2, "Vardas turi būti bent 2 simbolių"],
        maxlength: [50, "Vardas negali būti ilgesnis nei 50 simbolių"],
    },
    lastName: {
        type: String,
        required: [true, "Pavardė yra privaloma"],
        trim: true,
        minlength: [2, "Pavardė turi būti bent 2 simbolių"],
        maxlength: [50, "Pavardė negali būti ilgesnė nei 50 simbolių"],
    },
    course: {
        type: Number,
        required: [true, "Kursas yra privalomas"],
        trim: true,
        minlength: [1, "Kursas turi būti bent 1"],
        maxlength: [4, "Kursas negali būti didesnis nei 4"],
    },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Student", studentSchema);