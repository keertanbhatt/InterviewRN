const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  // let TaskSchema = new Schema({
  name: {
    type: String,
    required: "Enter the name of Task:",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Tasks", TaskSchema);
