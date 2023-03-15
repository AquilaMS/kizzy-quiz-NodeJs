const Quiz = require('../models/Quiz')
const Category = require('../models/Categories')
const userService = require('../service/User')

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

const AutoCreate = async () => {
    Category.bulkCreate([
        { category: 'Art' },
        { category: 'Sport' },
        { category: 'Enterniment' },
        { category: 'History' },
        { category: 'Geograph' }
    ])
    .then(result =>{
        return ''
    })
   .catch(err =>{
        return ''
   }) 
}

const findQuestion = async (id)=>{
    const quiz = await Quiz.findOne({where:{id}})
    return quiz.dataValues
}

const CheckIfRight = async(q, a, user) => {
    const loggedUser = await userService.FindUser(user.id)
    if(loggedUser.lifes -1 < 0 || loggedUser.lifes === null) return {error: 'Insuficient lifes'}
    const foundQuestion = await findQuestion(q)

    if(q == undefined || a == undefined) return {error: 'Empty'}
    if(foundQuestion.answer === a) {
        const dataUser = await userService.UpdateUserRightAnswer(user.id, loggedUser.score, loggedUser.lifes)
        return true
    }
    else return false
}

module.exports = {
    AutoCreate,
    AddQuiz,
    CheckIfRight,
}