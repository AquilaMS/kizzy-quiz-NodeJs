const Sequelize = require('sequelize')
const db = require('../configs/db')

const User = db.define('user',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    username:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    score:{
        type: Sequelize.INTEGER,
        default: 0
    },
    lifes:{
        type: Sequelize.INTEGER,
        default: 5
    },
})

module.exports = User