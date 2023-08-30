const express = require('express')
const router = express.Router();
const Workout = require('../models/workoutModel')

//Get all workouts
router.get('/' , (req, res) => {
res.json({message: "Get all workouts"})
})

//get single workout
router.get('/:id' , (req, res) => {
res.json({message: "Get single workout"})
})

// post new workout
router.post('/' , async (req, res) => {
    const {title,load,reps} = req.body
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)

    }
    catch(error) {
        res.status(400).json({error: error.message})

    }
})

//delete workout
router.delete('/:id' , (req, res) => {
res.json({message: "delete  workout"})
})

//update workout
router.patch('/:id' , (req, res) => {
res.json({message: "update a  workout"})
})


module.exports = router