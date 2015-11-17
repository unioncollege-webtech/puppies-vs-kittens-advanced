// Require the Express module (https://npmjs.com/package/express)
var express = require('express');
var hbs = require("hbs");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

// Create a new express application instance by calling `express()`
var app = express();

// Serve files in the 'public' directory with Express's built-in static file server
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.use(bodyParser());
app.use(cookieParser());
// Create a Counter class that will be used to create counter objects
// See the full description in README.md
// .

function Count(){
    this.haveVotes = {
        puppies: 0,
        kittens: 0
    };
}

Count.prototype.record = function(key){
    this.haveVotes[key]++;
};

Count.prototype.retrieve = function(key){
    return this.haveVotes[key];
};

Count.prototype.results = function(key){
    return this.haveVotes;
};

app.get('/', function(req, res){
    res.render('index'){
        title: "Puppies vs. Kittens"
        votes: countVotes.results()
    };
});

// Create a new Counter instance, like: `var counter = new Counter()`
var countVotes = new Count();

// Respond to 'get' requests for the route '/kittens'
// - Record a vote for 'kittens'
// - Retrieve the new cumulative votes for 'kittens'
// - Respond with with the message:
//     "Thank you for voting! Kittens have 12 total votes so far."

app.post('/kittens', function(req, res){
    countVotes.record('kittens');
    res.send('Thank you for voting! Kittens have ' + countVotes.retrieve('kittens') + ' total votes so far.'); 
});

app.post('/kittens', function(req, res) {
    res.cookies('voted', 'true',
    secure: true,
    maxAge: 1000*60*60*24*30 //2,592,000,000 sec?
    )
    res.render('vote', {
        title: 'Welcome!'
    });
});


// Respond to 'get' requests for the route '/puppies'
// - Record a vote for 'puppies'
// - Retrieve the new cumulative votes for 'puppies'
// - Respond with with the message:
//     "Thank you for voting! Puppies have 12 total votes so far."

app.post('/puppies', function(req, res){
    countVotes.record('puppies');
    res.send('Thank you for voting! Puppies have ' + countVotes.retrieve('puppies') + ' total votes so far.'); 
});

app.post('/puppies', function(req, res) {
    res.cookies('voted', 'true',
    secure: true,
    maxAge: 1000*60*60*24*30 //2,592,000,000 sec?
    )
    res.render('vote', {
        title: 'Welcome!'
    });
});

// Listen on port 8080 for Cloud9

app.listen(8080);

console.log("Server is up!");