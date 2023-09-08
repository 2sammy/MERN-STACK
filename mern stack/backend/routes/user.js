const express = require('express')

//controller functions
const{signupUser, loginUser} = require('../controllers/userController')
 
const router = express.Router()

//login route
//its going to be post request because all the occasions -we are going to send data to the server
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

module.exports = router