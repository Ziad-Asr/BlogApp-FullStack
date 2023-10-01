const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require('./routes/auth')

dotenv.config();
app.use(express.json()) // To enable sending json data on postman

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute); // to enable auth route

app.listen("3000", () => {
  console.log("Backend is running.");
});