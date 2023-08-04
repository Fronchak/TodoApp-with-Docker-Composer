const Todo = require('../models/todo');

class TodoController {

    save = async(req, res) => {
        try {
            const { name } = req.body;
            const todo = await Todo.create({
                name,
                isDone: false
            });
            return await this.renderTodos(res);
        }
        catch(e) {
            console.error(e);
            return this.renderTodos(res);
        }
    }

    renderTodos = async(res) => {
        const data = await Todo.findAll();
        const todos = data.map((todo) => todo.dataValues);
        const isEmpty = todos.length === 0;
        return res.render('index', {
            todos,
            isEmpty
        });
    }

    toggle = async(req, res) => {
        try {
            const { id } = req.params; 
            const todo = await Todo.findByPk(id);
            todo.isDone = !todo.isDone;
            await todo.save();
            return res.redirect('/todos');
        }
        catch(e) {
            console.error(e);
            return this.renderTodos(res);
        }
    }

    findAll = async(req, res) => {
        try {
            return await this.renderTodos(res);
        }
        catch(e) {
            console.error(e);
            return res.render('index');
        }
    }



    deleteById = async(req, res) => {
        try {
            const { id } = req.params;
            const todo = await Todo.findByPk(id);
            await todo.destroy();
            return res.redirect('/todos');
        }
        catch(e) {
            console.error(e);
            return res.render('index');
        }
    }
}

module.exports = new TodoController();