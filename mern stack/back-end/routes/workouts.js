const express = require('express')
const router = express.Router()

//getting all workouts
router.get('/', (req, res) => {
    res.json({msg : "Get all workouts"})

})

//get single workout
router.get('/:id' , (req, res) =>{
    res.json({msg: "get single workout"})
})

//create new workout
router.post("/", (req, res) => {
    res.json({msg : "create new workout"})


})

//delete a workout
router.delete("/:id", (req, res) => {
    res.json({msg : "delete workout"})


})
//update workout
router.patch("/:id", (req, res) => {
    res.json({msg : "delete workout"})


})

module.exports = router