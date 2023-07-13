const express = require("express");

// // const auth = require("./src/middlewares/auth.js");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());

const routes = require("./routes/task.routes");
app.use("/Tasks", routes);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = app;
