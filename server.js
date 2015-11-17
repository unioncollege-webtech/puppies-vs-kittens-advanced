// Require the Express module (https://npmjs.com/package/express)
var express = require("express");
var Counter = require('./counter.js');
var cookieParser = require('cookie-parser');
var hbs = require('hbs');

// Create a new express application instance by calling `express()`
var app = express();

// Serve files in the 'public' directory with Express's built-in static file server
app.use(express.static('public'));
app.use(cookieParser());
app.set('view engine', 'hbs');



// Create a new Counter instance, like: `var counter = new Counter()`

app.get('/', function(req,res){
    res.render('index.hbs', {
        title: 'welcome'
    });
});
app.get('/puppies', function(req,res){
    res.render('theCounted.hbs');
})
app.get('/kittens', function(req,res){
    res.render('theCounted.hbs');
})
// Respond to 'get' requests for the route '/kittens'
// - Record a vote for 'kittens'
// - Retrieve the new cumulative votes for 'kittens'
// - Respond with with the message:
//     "Thank you for voting! Kittens have 12 total votes so far."
app.post('/kittens', function(req, res){
    res.render('theCounted.hbs');
    //voteCounter.record("kittens");
    //res.send("Thank you fro voting! Kittens have " + voteCounter.retrieve('kittens')); 
    //console.log("Cookies: ", req.cookies);
});

app.post('/puppies', function(req, res){
     res.render('theCounted.hbs');
   // voteCounter.record('puppies');
    //res.send("Thank you fro voting! Puppies have " + voteCounter.retrieve('puppies')); 
   //console.log("Cookies: ", req.cookies)
});


// Respond to 'get' requests for the route '/puppies'
// - Record a vote for 'puppies'
// - Retrieve the new cumulative votes for 'puppies'
// - Respond with with the message:
//     "Thank you for voting! Puppies have 12 total votes so far."


// Listen on port 8080 for Cloud9

app.listen(8080);
