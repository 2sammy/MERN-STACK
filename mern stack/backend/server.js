const express = require('express');
// express app
require('dotenv').config()

const app = express();
const PORT =  4000;

// biuilding a middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})
// react to the request by creating routes
app.get('/', (req, res) => {
    res.json( {msg : 'welcome'})
});
app.listen(process.env.PORT, () =>{
    console.log(`server running on ${PORT}`, process.env.PORT)
});