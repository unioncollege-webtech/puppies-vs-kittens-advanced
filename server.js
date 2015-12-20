// Require the Express module (https://npmjs.com/package/express)
var express = require("express");
var cookieParser = require('cookie-parser');

// Create a new express application instance by calling `express()`
var app = express();
app.use(cookieParser());
// Serve files in the 'public' directory with Express's built-in static file server

app.use(express.static("public"));



// Create a new Counter instance, like: `var voteCounter = new Counter()`

var voteCounter = new Counter();
var Counter = require("./Counter");

// Have the Express application listen for incoming requests on port 8080
app.post('/', function (req,res){
    if(req.cookies) {
        res.send("voted already");
    }
    res.send('Post request to homepage');
})
app.listen(8080);