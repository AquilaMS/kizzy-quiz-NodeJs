const userService = require('../service/User')

const GetName = async (req, res)=>{
    const username = await userService.GetName(req)
    console.log()
    return res.status(200).json({username})
}

module.exports = {
    GetName,
}