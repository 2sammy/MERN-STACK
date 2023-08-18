
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const workoutRoutes = require('./routes/workouts');

// express app

const app = express();

// building a middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})
// react to the request by creating routes
app.use('/api/workouts', workoutRoutes);

// connect to the db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>{
            console.log(`connected to the database and listening server running on`, process.env.PORT)
        });
    })
    .catch((error) => {
        console.log(error)
    })

