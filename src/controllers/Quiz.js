const quizService = require('../service/Quiz')

const AddQuiz = async (req, res) => {
    const addedQuiz = await quizService.AddQuiz(req.user, req.body.quiz)
    console.log(addedQuiz)
    return res.status(200).json(addedQuiz)
}

const AutoCreate = async (req, res) => {
    const addedCategory = await quizService.AutoCreate()
    return res.status(200).json()
}

module.exports = {
    AddQuiz,
    AutoCreate
}