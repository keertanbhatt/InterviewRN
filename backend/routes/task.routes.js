const express = require("express");
const router = express.Router();

let todoList = require("../controller/task.controller");
const { createTask, deleteTask } = require("../controller/task.controller");
// create a todo
const taskRouter = express.Router();
taskRouter.post("/task/createTask", createTask);
// Delete a todo
taskRouter.delete("/task/deleteTask", deleteTask);

module.exports = router;
