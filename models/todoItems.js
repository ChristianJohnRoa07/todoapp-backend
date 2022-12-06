//import mongoose to create new Schema
const mongoose = require("mongoose");

//schema
const TodoItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  isDone:{
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("todo", TodoItemSchema);
