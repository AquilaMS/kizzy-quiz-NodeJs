const express = require('express')
const router = express.Router()
const userController = require('../controllers/User')

router.post('/name', userController.GetName)

module.exports = router