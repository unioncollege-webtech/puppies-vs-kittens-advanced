// Require the Express module (https://npmjs.com/package/express)
var express = require('express');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
//var voteCounter = require('./private/js/counter.js');

// Create a new express application instance by calling `express()`
var app = express();

// Serve files in the 'public' directory with Express's built-in static file server
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

cookieParser('This is a supery dupery secret cookie signerthingm"abob string that is not guessable easilyd.');

// Create a Counter class that will be used to create counter objects
// See the full description in README.md
// Counter constructor definition
function Counter() {
  this.store = {
    kittens: 0,
    puppies: 0
  }
    // Create a property on the `this` reference to store counts for each key
}

// .record(key) - increment the count value for `key`
Counter.prototype.record = function(key) {
  this.store[key]++;
};

// .retrieve(key) - retrieve the total recorded counts for `key`
Counter.prototype.retrieve = function(key) {
  return this.store[key];
};

// .results() - return an object containing the cumulative counts for all keys
Counter.prototype.results = function() {
  return this.store;
};

var voteCounter = new Counter();

app.get('/', function(req, res){
  res.render('index', {
    title: 'Puppies vs. Kittens',
    votes: voteCounter.results()
  });
//  console.log(req.cookies);
});

// Respond to 'post' requests for the route '/vote'
app.post('/vote', function(req, res){
  voteCounter.record(req.body.animal);
  console.log(req.body);
  res.redirect('/');
/*  res.render('voted', {
    title: 'Puppies vs. Kittens',
    animal: 'kittens',
    votes: voteCounter.retrieve('kittens')
  }); */
});

// Have the Express application listen for incoming requests on port 8080
console.log('[kvsp] app listening at 8080');
app.listen(8080);
