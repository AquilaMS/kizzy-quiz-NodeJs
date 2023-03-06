const GetName = async (req) =>{
    const username = req.user.username
    return username
}

module.exports = {
    GetName
}