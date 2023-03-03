const User = require('../models/User')
const userService = require('../service/User')

const CreateUser = async (req, res)=>{
    const exists = await userService.GetUserById(req.body);
    if(exists){return res.send({error:'Email already registered'})}
    else{
        const insertedUser = await userService.InsertInToDatabase(req.body)
        return res.send(insertedUser)
    }
}

const LoginUser = async (req, res) =>{
    const exists = await userService.GetUserById(req.body);
    if(!exists){return res.send({error:'User not found'})}
    else{
        const user = exists
        const loggedUser = await userService.CheckPassword(req.body.password, user.password)
        return res.send(loggedUser)
    }
}

module.exports = {
    CreateUser,
    LoginUser
} 