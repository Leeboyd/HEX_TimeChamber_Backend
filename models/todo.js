const mongoose = require('mongoose')
 
// Declare Schema
const TodoSchema = new mongoose.Schema(
  {
    title: String,
    comments: String,
    deadline: Date,
    isStared: Boolean,
    isDone: Boolean
  }, 
  { timestamps: true }
);

// Declare Model to mongoose with Schema
const Todo = mongoose.model('Todo', TodoSchema)

// Export Model to be used in Node
module.exports = mongoose.model('Todo')