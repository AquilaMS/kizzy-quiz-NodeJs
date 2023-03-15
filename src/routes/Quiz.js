const express = require('express');
const router = express.Router();
const quizService = require('../controllers/Quiz');

router.post('/add', quizService.AddQuiz)
router.put('/', quizService.AutoCreate)
router.post('/answer', quizService.CheckIfRight)

module.exports = router; 