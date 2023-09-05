require('dotenv').config()

const express = require('express');



//express app
const app =express();

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// react to the request/creating routes

app.get('/hello', (req, res) => {
    res.json({msg : "hello sam"})
})

//listen for a request
app.listen(process.env.PORT, () =>{
    console.log('listening on port', process.env.PORT)
}
);