const { DataTypes } = require("sequelize");
const db = require("../config/db.connection");

const todo = db.define("todos", {
  todo_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  description: DataTypes.STRING,
  detail: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  is_deleted: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
});

module.exports = todo;
