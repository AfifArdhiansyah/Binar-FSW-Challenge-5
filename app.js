// require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const FileUpload = require("express-fileupload");

const indexRouter = require("./routes/index");
const carsRouter = require("./routes/cars");
// const notesRouter = require("./routes/notes");

const app = express();

app.use(cors());
app.use(FileUpload());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "views")));

app.use("/", indexRouter);
app.use("/cars", carsRouter);
// app.use("/notes", notesRouter);

module.exports = app;