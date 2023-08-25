const express = require('express');
const workoutRoutes = require('../workout/routes/workouts')
require('dotenv').config()
 
//creation of an express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// react to the requests

app.use('/api/workouts', workoutRoutes)
// listen for the requests

app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
})