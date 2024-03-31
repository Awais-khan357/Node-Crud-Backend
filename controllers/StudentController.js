const Student = require("../models/product.model.js");

const postStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStudent = async (req, res) => {
  try {
    const student = await Student.find({});
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const updateStudent = await Student.findByIdAndUpdate(id, req.body);

    if (!updateStudent) {
      return res.status(400).json({ message: "User Not found" });
    }

    const UpdatedStudent = await Student.findById(id);
    res.status(200).json(UpdatedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.status(200).json({ message: "student delete Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getStudent,
  postStudent,
  updateStudent,
  deleteStudent,
};
