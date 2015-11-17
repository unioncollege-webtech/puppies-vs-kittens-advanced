// Require the Express module (https://npmjs.com/package/express)
var express = require('express');
var hbs = require('hbs');
var hbsutils = require('hbs-utils')(hbs);
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// Bring in Counter() from other file
var voteCounter = require('./private/js/counter.js');

// Create a new express application instance by calling `express()`
var app = express();

// Serve files in the 'public' directory with Express's built-in static file server
app.use(express.static('public'));

// Set view engine and partials directory
app.set('view engine', 'hbs');
hbsutils.registerWatchedPartials('./views/partials');

// Enable and configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Enable cookie-parser
app.use(cookieParser());

cookieParser('This is a supery dupery secret cookie signerthingm"abob string that is not guessable easilyd.');

app.get('/', function(req, res){
  // Denies voting
  if(req.cookies.animal){
    res.render('voted', {
      animal: req.cookies.animal,
      votes: voteCounter.results()
    });
  // Allows voting
  } else {
    res.render('index', {
      votes: voteCounter.results()
    })
  }
});

// Respond to 'post' requests for the route '/vote'
app.post('/vote', function(req, res){
  if(!req.cookies.animal){
    voteCounter.record(req.body.animal);
    res.cookie("animal", req.body.animal, {
      maxAge: 9000000000
    });
    res.redirect('/');
  } else {
    // Do nothing
    res.redirect('/');
  }
});

// Have the Express application listen for incoming requests on port 8080
console.log('[kvsp] app listening at 8080');
app.listen(8080);
