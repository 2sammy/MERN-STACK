const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const validator = require('validator')
const Schema = mongoose.Schema

//creating user schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})
//static signup method
userSchema.statics.signup = async function (email, password){
    //checking if the email already exists in the database
    const exists = await this.findOne({ email})

    //validation
    if(!password || !email) {
        throw Error('All fields must be filled')
    }

    if(!validator.isEmail(email)) {
        throw Error('Email entered is invalid')
    }

    if(!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    if(exists){
        throw Error('Email already in use')
    }
// we are using await because it takes time to design
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({email, password: hash})

    return user
}

//static login method
userSchema.statics.login = async function(email, password) {
   
    if(!password || !email) {
        throw Error('All fields must be filled')
    }
    const user = await this.findOne({email})

    if(!user) {
        throw Error('incorrect email')
    }
    const match = await bcrypt.compare(password, user.password)
    if(!match) {
        throw Error('incorrect password')
    }
    return user
}


module.exports = mongoose.model('User', userSchema)
