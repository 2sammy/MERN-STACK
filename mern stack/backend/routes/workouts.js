const express = require('express');
const {
    createWorkout,
    getWorkout,
    getWorkouts
} = require('../controllers/workoutController')


const router =express.Router();

router.get('/', getWorkouts)

//GET single workout
router.get('/:id', getWorkout);

//POST new workouts
router.post('/', createWorkout);

// delete single work out
router.delete('/:id', (req, res) => {
    res.json({ msg: 'DELETE a workout'})

});

//UPDATE a workout
router.patch('/:id',(req, res) => {
    res.json({msg : 'UPDATE workout'})
});
module.exports = router;