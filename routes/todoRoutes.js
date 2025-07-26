const express = require( "express" );
const router = express.Router();
const Todo = require("../Models/todoSchema")

// Get all todos
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Add a new todo
router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  const saved = await newTodo.save();
  res.status(201).json(saved);
});

// Update a todo (mark as done or edit)
router.put("/:id", async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete a todo
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;