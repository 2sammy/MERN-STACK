const express = require('express')
const route = require('../../backend/routes/workouts')

const router = express.Router()

//Get all workouts
router.get('/', (req, res) => {
    res.json({msg: 'Get all workouts'})

})
//get single workout
router.get('/:id', (req, res) => {
    res.json({msg: 'Get  single workouts'})

})

//post new workout
router.post('/', (req, res) => {
    res.json({msg: 'Get  single workouts'})

})
//delete workout
router.delete('/:id', (req, res) => {
    res.json({msg: 'delete workouts'})

})

//update workout
router.patch('/:id', (req, res) => {
    res.json({msg: 'update   workouts'})

})

module.exports = router