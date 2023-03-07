const Quiz = require('../models/Quiz')

const AddQuiz = async (user, quiz) =>{
    return Quiz.create({
        question: quiz.question,
        answer: quiz.answer,
        category: quiz.category,
        author: user.username,
        alternative1: quiz.alternative1,
        alternative2: quiz.alternative2,
        alternative3: quiz.alternative3,
        alternative4: quiz.alternative4,
    })
    .then(result =>{ return result.dataValues})
    .catch(err => {return {error:err.errors[0].message}})
} 

module.exports = {
    AddQuiz
}