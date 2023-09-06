const mongoose = require('mongoose');
// const mongooose = require('mongoose');
 //creating the schema
const Schema = mongoose.Schema
//what our data should look like
//we are using it as afunction
//const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type : String,
        required : true
    },
    reps : {
        type: Number,
        required : true
    },
    load : {
        type : Number,
        required : true

    }
    
}, {
    timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema)
