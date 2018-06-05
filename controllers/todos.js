const TodoModel = require('../models/todo')

async function listAll (ctx) {
  // Fetch all Todos
  const todos = await TodoModel.find({})
  ctx.body = todos
}

async function create (ctx) {
  // Create New Todo
  const newTodo = new TodoModel(ctx.request.body)
  const savedTodo = await newTodo.save()
  ctx.body = savedTodo
}

async function updateById (ctx) {
  // Find Todo based on id from url parameters
  const id = ctx.params.id
  let todo = await TodoModel.findById(id)
  // 更新
  todo = Object.assign(todo, ctx.request.body)
  
  // Update todo in database
  const updatedTodo = await todo.save()
  ctx.body = updatedTodo
}

async function removeById (ctx) {
  // Find Todo based on id from url parameters
  const id = ctx.params.id
  const todo = await TodoModel.findById(id)

  // Delete todo from database and return deleted object as reference
  const deletedTodo = await todo.remove()
  ctx.body = deletedTodo
}

module.exports = {
  listAll,
  create,
  updateById,
  removeById
}