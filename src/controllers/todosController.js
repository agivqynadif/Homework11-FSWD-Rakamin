const Todo = require("../models/todo");

const createTodo = async (req, res, next) => {
  const { description, detail } = req.body;

  if (!description || description.trim() === "") {
    return res.status(400).json({
      error: "Description cannot be empty. Please fill the description.",
    });
  }
  try {
    Todo.create({
      description: description,
      detail: detail,
      is_deleted: 0,
    }).then((result) => {
      res.status(201).json({
        message: "New todo added successfully!",
        data: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to add todo.",
    });
    console.log(error);
  }
};

const listAllTodos = async (req, res, next) => {
  try {
    Todo.findAll({
      attributes: ["todo_id", "description"],
      order: [["todo_id", "ASC"]],
      where: {
        is_deleted: 0,
      },
    }).then((result) => {
      res.status(201).json({
        message: "All todos retrieved successfully!",
        data: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve all todos.",
    });
    console.log(error);
  }
};

const getDetailTodo = async (req, res, next) => {
  const todoId = req.params.todoId;
  try {
    Todo.findOne({
      where: {
        todo_id: todoId,
        is_deleted: 0,
      },
    }).then((todo) => {
      if (!todo) {
        return res.status(404).json({ message: "Todo not found." });
      }
      res.status(201).json({
        message: "Todo data successfully retrieved!",
        data: todo,
      });
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve data.",
    });
    console.log(error);
  }
};

const deleteTodoById = async (req, res, next) => {
  const todoId = req.params.todoId;
  try {
    Todo.update(
      {
        is_deleted: 1,
      },
      {
        where: {
          todo_id: todoId,
          is_deleted: 0,
        },
      }
    ).then((result) => {
      if (result[0] > 0) {
        res.status(201).json({ message: "Todo has been deleted!" });
      } else {
        res.status(404).json({ message: "Todo not found or already deleted." });
      }
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete data.",
    });
    console.log(error);
  }
};
module.exports = {
  createTodo,
  listAllTodos,
  getDetailTodo,
  deleteTodoById,
};
