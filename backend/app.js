const express = require("express");

const taskRouter = require("./routes/task.routes");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());

app.use(taskRouter);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = app;
