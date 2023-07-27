const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts.js');

// express app
require('dotenv').config()

const app = express();
const PORT =  4000;

// building a middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})
// react to the request by creating routes
app.use('/api/workouts',workoutRoutes);

// connect to the db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>{
            console.log(`connected to the db and listening server running on`, process.env.PORT)
        });
    })
    .catch((error) => {
        console.log(error)
    })

