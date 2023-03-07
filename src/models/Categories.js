const Sequelize = require('sequelize')
const db = require('../configs/db')
const Quiz = require('./Quiz')

const Category = db.define('category', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    category:{
        type: Sequelize.STRING,
        unique: true
    }
})

module.exports = Category