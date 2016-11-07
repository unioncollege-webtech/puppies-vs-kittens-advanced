// Require the Express module (https://npmjs.com/package/express)
var express = require('express');

// Create a new express application instance by calling `express()`
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var pug = require('pug');
var Counter = require("./counter.js");

app.set('view engine', 'pug');

// Serve files in the 'public' directory with Express's built-in static file server
app.use(express.static("public"));

// // Create a Counter class that will be used to create counter objects
// // See the full description in README.md
// // Counter constructor definition
// function Counter() {
//     // Create a property on the `this` reference to store counts for each key
//     this.count = {};
// }

// // .record(key) - increment the count value for `key`
// Counter.prototype.record = function(key) {
//     if (isNaN(this.count[key])) {
//         this.count[key] = 0;
//     }
//     this.count[key]++;
// };

// // .retrieve(key) - retrieve the total recorded counts for `key`
// Counter.prototype.retrieve = function(key) {
//     return this.count[key];
// };

// // .results() - return an object containing the cumulative counts for all keys
// Counter.prototype.results = function() {
//     return this.count;
// };

// Create a new counter instance
var voteCounter = new Counter();

// // Record a vote for kittens
// voteCounter.record('kittens');
// // Retrieve the number of votes for kittens
// var kittenVotes = voteCounter.retrieve('kittens');
// // => 1

// Create a new Counter instance, like: `var voteCounter = new Counter()`

// Respond to 'get' requests for the route '/kittens'
// - Record a vote for 'kittens'
// - Retrieve the new cumulative votes for 'kittens'
// - Respond with with the message:
//     "Thank you for voting! Kittens have 12 total votes so far."
/*app.get('/kittens', function (req, res) {
    voteCounter.record('kittens');
    var score = voteCounter.retrieve('kittens');
    res.send("Thank you for voting! Kittens have " + score + " total votes so far.");
});*/

// function timestamp(req, res, next) {
//     req.timestamp = new Date();
//     next();
// }

// app.use(timestamp);

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
//app.use(pug());

app.post('/vote', function(req, res) {
    var name = req.body.name;
    var selection = req.body.selection;
    res.cookie('voted', true);
    voteCounter.record(selection);
    var voteCount = voteCounter.retrieve(selection);
    
    if(req.cookies.voted) {
        res.send('Voting more than once would be cheating.');
    }
    else {
        res.render('vote', {
            selection: selection,
            name: name,
            voteCount: voteCount
        });
        //res.send('Thanks for voting for ' + selection + ', ' + name);
    }
});

// Respond to 'get' requests for the route '/puppies'
// - Record a vote for 'puppies'
// - Retrieve the new cumulative votes for 'puppies'
// - Respond with with the message:
//     "Thank you for voting! Puppies have 12 total votes so far."
/*app.get('/puppies', function (req, res) {
    voteCounter.record('puppies');
    var score = voteCounter.retrieve('puppies');
    res.send("Thank you for voting! Puppies have " + score + " total votes so far.");
});*/

// app.post('/puppies', function(req, res) {
//     res.send('Hello from puppies');
// });

// Have the Express application listen for incoming requests on port 8080
app.listen(8080);

console.log("Server is up!");