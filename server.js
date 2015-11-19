// Require the Express module (https://npmjs.com/package/express)
var express = require('express');
var hbs = require('hbs');
var bodyParser = require("body-parser");

// Create a new express application instance by calling `express()`
var app = express();
//var bodyParser = require('body-parser');
//var multer = require('multer');
//var upload = multer();

// Serve files in the 'public' directory with Express's built-in static file server
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a Counter class that will be used to create counter objects
// See the full description in README.md
function Counter() {
    this.varsF = {
        kittens:0,
        puppies:0
    };
    // Create a property on the `this` reference to store counts for each key
}

// .record(key) - increment the count value for `key`
Counter.prototype.record = function(key) {
    this.varsF[key]++;
};

// .retrieve(key) - retrieve the total recorded counts for `key`
Counter.prototype.retrieve = function(key) {
    return this.varsF[key];
};

// .results() - return an object containing the cumulative counts for all keys
Counter.prototype.results = function() {
    return this.varsF;
};


// Create a new Counter instance, like: `var voteCounter = new Counter()`
var voteCounter = new Counter();

app.get('/', function(req, res){
    res.render('index', {
        votes: voteCounter.results()
    });
});

app.post('/vote', function(req, res){
    voteCounter.record(req.body.animals);
    res.redirect('/');
    
});


// Have the Express application listen for incoming requests on port 8080
app.listen(8080);