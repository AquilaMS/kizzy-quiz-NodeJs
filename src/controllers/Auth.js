const authService = require('../service/Auth')

const CreateUser = async (req, res)=>{
    const exists = await authService.GetUserById(req.body);
    if(exists){return res.send({error:'Email already registered'})}
    else{
        const insertedUser = await authService.InsertInToDatabase(req.body)
        return res.send(insertedUser)
    }
}

const LoginUser = async (req, res) =>{
    const loggin = await authService.LoginUser(req, res)
    return res.send(loggin)
}

module.exports = {
    CreateUser,
    LoginUser
} 