const quizService = require('../service/Quiz')

const AddQuiz = async (req, res) =>{
    const addedQuiz = await quizService.AddQuiz(req.user, req.body.quiz)
    console.log(addedQuiz)
    return res.status(200).json(addedQuiz)
}

module.exports = {
    AddQuiz 
}