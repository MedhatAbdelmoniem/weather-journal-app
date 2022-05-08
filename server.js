// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes
const express = require ('express');

// Start up an instance of app
const app = express();

app.use(express.static('website'));


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');

app.use(cors());


// Initialize the main project folder


// Setup Server
const port = 8000;

app.listen(port);

console.log("server is successful");

//for post function
app.post('/',function(req, res){

    projectData = {temp:req.body.temp.main.temp,     
        date: req.body.date,
        user: req.body.user};
        console.log(projectData);
    console.log("posting data successful");

});




// for get function
app.get('/e', function(req, res){


res.send(projectData);

console.log("get data successful");


});