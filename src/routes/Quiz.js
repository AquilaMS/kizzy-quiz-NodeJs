const express = require('express');
const router = express.Router();
const quizService = require('../controllers/Quiz');

router.post('/add', quizService.AddQuiz)
router.put('/', quizService.AutoCreate)

module.exports = router; 