const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoriesRoute = require('./routes/categories')
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json()) // To enable sending json data on postman
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute); // to enable auth route
app.use("/api/users", userRoute); 
app.use("/api/posts", postRoute); 
app.use("/api/categories", categoriesRoute); 

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.listen("8000", () => {
  console.log("Backend is running.");
});