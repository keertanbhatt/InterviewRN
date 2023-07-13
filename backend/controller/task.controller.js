const mongoose = require("mongoose");
const Task = require("../model/task.model");
// const Task = mongoose.model("Tasks");

const createTask = async (req, res) => {
  const task = new Task(req.body);

  try {
    const savedTask = await task.save();
    res.status(201).json({
      message: "Task Created!!!",
      task: savedTask,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.update_a_task = (req, res) => {
  Task.findOneAndUpdate(
    { taskId: req.params.taskId },
    req.body,
    { new: true },
    (err, task) => {
      if (err) throw err;

      res.status(200).json({
        message: "Task updated successfully",
        result: task,
      });
    }
  );
};
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    try {
      const deletedTask = await task.deleteOne();
      res.status(202).json({
        message: "Task is Deleted",
        task: deletedProduct,
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
module.exports = {
  createTask,
  deleteTask,
};
