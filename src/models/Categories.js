const Sequelize = require('sequelize')
const db = require('../configs/db')

const Category = db.define('category', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    category:{
        type: Sequelize.STRING
    }
})

module.exports = Category