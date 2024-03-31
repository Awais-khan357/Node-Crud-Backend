const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter your name"],
    },
    class: {
      type: String,
      required: [true],
    },
    rollNo: {
      type: Number,
      required: [true, "please enter RollNo"],
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
