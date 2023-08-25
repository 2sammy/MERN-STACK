const express = require('express')
const router = express.Router();

//Get all workouts
router.get('/' , (req, res) => {
res.json({message: "Get all workouts"})
})

//get single workout
router.get('/:id' , (req, res) => {
res.json({message: "Get single workout"})
})

// post new workout
router.post('/' , (req, res) => {
res.json({message: "create new  workout"})
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