const express = require("express");
const mongoose = require("mongoose");
const StudentRoute = require("./routes/StudentRoute.js");
const app = express();

//middleware
app.use(express.json());

app.use("/api/students", StudentRoute);

mongoose
  .connect(
    "mongodb+srv://projectUser:CjoJpNuDUmSgebXQ@finaldb.iak9zb5.mongodb.net/Final-db?retryWrites=true&w=majority&appName=FinalDb"
  )
  .then(() => {
    console.log("database connected");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("database failed");
  });
