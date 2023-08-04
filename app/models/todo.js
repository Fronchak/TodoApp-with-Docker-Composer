const { DataTypes } = require('sequelize');
const conn = require('../database/conn');

const Todo = conn.define('Todo', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

module.exports = Todo;