const Sequelize = require('sequelize')

const sequelize = new Sequelize('db_quiz', 'admin', '123', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

module.exports = sequelize