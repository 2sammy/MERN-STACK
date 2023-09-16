const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

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
userSchema.static.signup = async function(email, password){
    const exist = await this.findOne({email})

    if(exist){
        throw Error('Email Alreasy.....')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password : hash})
    return user
}

module.exports = mongoose.model('User', userSchema)