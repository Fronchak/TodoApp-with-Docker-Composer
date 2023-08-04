const { Router } = require('express');
const todoController = require('../controllers/todo-controller');

const todoRoutes = Router();

todoRoutes.get('/', todoController.findAll);
todoRoutes.post('/', todoController.save);
todoRoutes.post('/update/:id', todoController.toggle);
todoRoutes.get('/delete/:id', todoController.deleteById);

module.exports = todoRoutes;