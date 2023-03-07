const Sequelize = require('sequelize')
const db = require('../configs/db')
const categories = require('./Categories')

const Quiz = db.define('quiz', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    question:{
        type: Sequelize.STRING,
        allowNull: false
    },
    answer:{
        type: Sequelize.STRING,
        allowNull: false
    },
    category:{
        type: Sequelize.STRING,
    }, 
    author:{
        type: Sequelize.STRING,
        allowNull: false
    },
    alternative1:{
        type: Sequelize.STRING,
        allowNull: false
    },
    alternative2:{
        type: Sequelize.STRING,
        allowNull: false
    },
    alternative3:{
        type: Sequelize.STRING,
        allowNull: false
    },
    alternative4:{
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Quiz