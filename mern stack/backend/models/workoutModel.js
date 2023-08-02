const mongoose = require('mongoose');

 //creating the schema
const Schema = mongoose.Schema
//what our data should look like
const workoutSchema = new Schema({
    title: {
        type: String,
        require: true
    },

    reps : {
        type: Number,
        require: true
    },

    load: {
        type: Number,
        require:true
    }
},

    {
        timestamps: true
    }
)

module.exports = mongoose.model('workout',workoutSchema)
