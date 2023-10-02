const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')

dotenv.config();
app.use(express.json()) // To enable sending json data on postman

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute); // to enable auth route
app.use("/api/users", userRoute); 
app.use("/api/posts", postRoute); 

app.listen("8000", () => {
  console.log("Backend is running.");
});