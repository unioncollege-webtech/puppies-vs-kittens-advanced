// Require the Express module (https://npmjs.com/package/express)
var express = require('express');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var Count = require('./counter');

// Create a new express application instance by calling `express()`
var app = express();

// Serve files in the 'public' directory with Express's built-in static file server
app.use(express.static('public'));
app.use(express.static('views'));

app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cookieParser());

// Create a Counter class that will be used to create counter objects
// See the full description in README.md
// .

// Create a new Counter instance, like: `var counter = new Counter()`
var Scoreboard = new Count();

app.get('/', function(req, res){
    if(req.cookies.vote){
        res.render('votes', {
            title: "Puppies vs. Kittens",
            score: Scoreboard.results(),
            animal: req.cookies.vote
        });
    } else {
        res.render('voting method', {
            title: "Puppies vs. Kittens",
            score: Scoreboard.results()
        });   
    }
});

app.post('/vote', function(req, res){
    Scoreboard.record(req.body.animal);
    res.cookie('vote', req.body.animal, {
        secure: true,
    });
    res.redirect('/');
});

// Respond to 'get' requests for the route '/kittens'
// - Record a vote for 'kittens'
// - Retrieve the new cumulative votes for 'kittens'
// - Respond with with the message:
//     "Thank you for voting! Kittens have 12 total votes so far."


// Respond to 'get' requests for the route '/puppies'
// - Record a vote for 'puppies'
// - Retrieve the new cumulative votes for 'puppies'
// - Respond with with the message:
//     "Thank you for voting! Puppies have 12 total votes so far."


// Listen on port 8080 for Cloud9

app.listen(8080);
console.log("Server is up!");
