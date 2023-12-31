const express = require('express');

const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')


const router =express.Router();

//require auth for all workout routes
router.use(requireAuth)


//get all workouts
router.get('/', getWorkouts);

//GET single workout
router.get('/:id', getWorkout);

//POST new workouts
router.post('/', createWorkout);

// delete single work out
router.delete('/:id', deleteWorkout);

//UPDATE a workout
router.patch('/:id', updateWorkout);

module.exports = router;