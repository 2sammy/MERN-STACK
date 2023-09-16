const User = require('../models/')

//login user
const loginUser = async() =>{
    resizeBy.json({mess: "login user"})
}

//signup luser
const signupUser = async() =>{

    const {email, password} = req.body

    try{
        const user = await User.signup(email, password)
        res.status(200).json({email, user})
    } catch(error){
        res.status(400).json({error: error.message})

    }
}
module.exports = {loginUser, signupUser}