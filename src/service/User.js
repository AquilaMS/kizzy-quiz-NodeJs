const User = require('../models/User')

const GetName = async (req) =>{
    const username = req.user.username
    return username
}

const FindUser = async(id) => {
    const user = await User.findOne({attributes:['username', 'score', 'lifes'],where:{id}})
    return user.dataValues
}

const UpdateUserRightAnswer = async (id, oldScore, oldLife) => {
    const user = await User.update({score: oldScore + 5, lifes: oldLife - 1}, {where: {id}})
    return user
} 

module.exports = {
    GetName,
    FindUser,
    UpdateUserRightAnswer,
}