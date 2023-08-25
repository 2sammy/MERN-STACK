const express = require('express');
require('dotenv').config()
 
//creation of an express app
const app = express()

// react to the requests

app.get('/', (req, res) => {
    res.json({message: "hello sam"})
} )
// listen for the requests

app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
})