// Require the Express module (https://npmjs.com/package/express)
var express = require('express');
var hbs = require("hbs");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var Count = require("./counter.js");

// Create a new express application instance by calling `express()`
var app = express();

// Serve files in the 'public' directory with Express's built-in static file server
app.use(express.static('public'));

app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cookieParser());
// Create a Counter class that will be used to create counter objects
// See the full description in README.md
// .

// Create a new Counter instance, like: `var counter = new Counter()`
var countVotes = new Count();

app.get('/', function(req, res){
    if(req.cookies.vote){
        res.render('voted', {
            title: "Puppies vs. Kittens",
            votes: countVotes.results(),
            animal: req.cookies.vote
        });
    } else {
        res.render('notvoted', {
            title: "Puppies vs. Kittens",
            votes: countVotes.results()
        });   
    }
});

app.post('/vote', function(req, res){
    countVotes.record(req.body.animal);
    res.cookie('vote', req.body.animal, {
        secure: true,
        maxAge: 1000*60*60*24*30
    });
    res.redirect('/');
});

// Listen on port 8080 for Cloud9

app.listen(8080);

console.log("Server is up!");