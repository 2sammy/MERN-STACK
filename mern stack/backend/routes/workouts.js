const express = require('express');
const Workout = require('../models/workoutModel.js');
const router =express.Router();

router.get('/', (req, res) => {
    res.json({msg : 'GET all workouts'})

});
//GET single workout
router.get('/:id', (req, res) => {
    res.json({ msg : 'GET single workout'})
});

//POST new workouts
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)


    } catch(error) {
        res.status(400).json({error: error.message})

    }
});

// delete single work out
router.delete('/:id', (req, res) => {
    res.json({ msg: 'DELETE a workout'})

});

//UPDATE a workout
router.patch('/:id',(req, res) => {
    res.json({msg : 'UPDATE workout'})
});
module.exports = router;