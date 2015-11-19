// Require the Express module (https://npmjs.com/package/express)
var express = require("express");
var Counter = require('./counter');
var cookieParser = require('cookie-parser');
var hbs = require('hbs');
var bodyParser = require('body-parser');

var voteCounter = new Counter();

// Create a new express application instance by calling `express()`
var app = express();

// Serve files in the 'public' directory with Express's built-in static file server
app.use(express.static('public'));
app.use(cookieParser());
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// Create a new Counter instance, like: `var counter = new Counter()`

app.get('/', function(req, res) {
    if (req.cookies.voted) {
        res.render('theCounted', {
            title: 'Puppies V.S. Kittens',
            totalCount: voteCounter.results()
        });
    }
    else {
        res.render('index', {
            title: 'Puppies V.S. Kittens',
            totalCount: voteCounter.results()
        });
    }
    console.log(voteCounter.results());
});

// Respond to 'get' requests for the route '/kittens'
// - Record a vote for 'kittens'
// - Retrieve the new cumulative votes for 'kittens'
// - Respond with with the message:
//     "Thank you for voting! Kittens have 12 total votes so far."
app.post('/theCounted', function(req, res) {
    if (!req.cookies.voted) {
        console.log(req.body.pet);
        voteCounter.record(req.body.pet);
        console.log(voteCounter.retrieve(req.body.pet));
        res.cookie('voted', 'true', {
            secure: true,
            maxage: 900000,
        });
        res.redirect('/');
    } else {
        res.redirect('/');
    }});





// Listen on port 8080 for Cloud9

app.listen(8080);
