require('dotenv').config();
console.log(process.env);
const express = require("express");
const exphbs = require("express-handlebars");
const todoRoutes = require('./routes/todo-routes');
const sequelize = require('./database/conn');
require('./models/todo');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public/assets'));
app.use('/todos', todoRoutes);

sequelize.sync({ alter: true })
    .then(() => {
        app.listen(3000, () => {
            console.log("SERVIDOR CRIADO COM SUCESSO");
            console.log("App listening to port 3000");
        });
    })
    .catch((e) => {
        console.log("ERRO AO CRIAR O SERVIDOR");
        console.error(e);
    })

