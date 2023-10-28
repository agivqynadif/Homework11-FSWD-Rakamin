const express = require("express");
const router = express.Router();
const todoModel = require("../controllers/todosController");

router.post("/todos", todoModel.createTodo);
router.get("/todos", todoModel.listAllTodos);
router.get("/todos/:todoId", todoModel.getDetailTodo);
router.delete("/todos/:todoId", todoModel.deleteTodoById);

module.exports = router;
