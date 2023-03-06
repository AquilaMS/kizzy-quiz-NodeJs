const express = require('express')
const router = express.Router()
const authService = require('../controllers/Auth')

router.post('/signup', authService.CreateUser)
router.post('/login', authService.LoginUser)

module.exports = router