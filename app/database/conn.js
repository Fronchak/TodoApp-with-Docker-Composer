const { Sequelize } = require('sequelize');

const database = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect: 'mysql',
    port
});

module.exports = sequelize;