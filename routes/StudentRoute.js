const express = require("express");
const router = express.Router();
const {
  getStudent,
  postStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/StudentController.js");

router.get("/", getStudent);
router.post("/", postStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
