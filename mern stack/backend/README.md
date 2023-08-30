#nodemon
nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

DOWNLOAD DOTENV
-load an environment variable from  dotenv file into a process dotenv object

listening to the requests
app.listen(process.env.PORT, () => {
    console.log('running on port ', process.env.PORT)
});

reacting to the requests/  routes
app.get('/', (req, res) => {
    res.json({msg : " hello!!!"})
})

require ('dotenv').config()