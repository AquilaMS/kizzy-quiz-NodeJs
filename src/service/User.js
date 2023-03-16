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

const UpdateLifes = async(id) => {
    const rawData = await User.findOne({attributes:['updatedAt', 'lifes'], where:{id}})
    const oldLifes = rawData.dataValues.lifes
    const updatedDate = new Date(rawData.dataValues.updatedAt).getTime()
    const dateNow = Date.now()

    let newLifes = parseInt((dateNow - updatedDate)/(1000 * 3600))
          
    if((oldLifes + newLifes) >= 5) newLifes = 5
    else newLifes += oldLifes
    const addedLifes = await User.update({lifes: newLifes}, {where:{id}})

    return addedLifes
}

module.exports = {
    GetName,
    FindUser,
    UpdateUserRightAnswer,
    UpdateLifes
}