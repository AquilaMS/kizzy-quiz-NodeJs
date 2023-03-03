const User = require('../models/User')
const bcrypt = require('bcrypt')

const GetUserById = async (user)=>{
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

module.exports = {
    GetUserById,
    InsertInToDatabase,
    CheckPassword
}