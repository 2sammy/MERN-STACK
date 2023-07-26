const express = require('express');
const router =express.Router();

router.get('/', (req, res) => {
    res.json({msg : 'GET all workouts'})

})
//GET single workout
router.get('/:id', (req, res) => {
    res.json({ msg : 'GET single workout'})
})

//POST new workouts
router.post('/', (req, res) => {
    res.json({msg : 'POST new workouts'})
})

// delete single work out
router.delete('/:id', (req, res) => {
    res.json({ msg: 'DELETE a workout'})
})

//UPDATE a workout
router.patch('/:id',(req, res) => {
    res.json({msg : 'UPDATE workout'})
})
module.exports = router