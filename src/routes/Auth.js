const express = require('express')
const router = express.Router()
const userController = require('../controllers/Auth')

router.post('/signup', userController.CreateUser)
router.post('/login', userController.LoginUser)

module.exports = router