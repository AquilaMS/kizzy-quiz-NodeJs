const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userService = require('../service/User')

const SECRET = 'my super secret key'

const GetUserById = async (user)=>{
    const users = await User.findOne({where:{id:user.id}})
    return users
}

const GetUserByEmail = async (user)=>{
    const users = await User.findOne({where:{email:user.email}})
    return users
}

const InsertInToDatabase = async (user) =>{
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(user.password, salt);
    try {
        const insertedUser = await User.create({
            username: user.username,
            password:  hash,
            email: user.email
        });
        return insertedUser;
    } catch(err) {
        return err.errors[0].message;
    }
}

const CheckPassword = async (plainTextPwd, hashedPwd)=>{
    return bcrypt.compare(plainTextPwd, hashedPwd)
}

const LoginUser = async (req, res)=>{
    const exists = await GetUserByEmail(req.body);
    if(!exists){return {error:'User not found'}}
    else{
        const user = exists
        const loggedUser = await CheckPassword(req.body.password, user.password)
        if (loggedUser == false) {return res.send({error:'Wrong password'})}

        const payload = {
            username: user.username,
            id: user.id
        }
        await userService.UpdateLifes(user.id)
        const token = jwt.sign(payload, SECRET, {expiresIn: '10h'})      
        return {token: 'Bearer '+ token}
    }
}

module.exports = {
    GetUserById,
    InsertInToDatabase,
    CheckPassword,
    LoginUser,
    GetUserByEmail
}