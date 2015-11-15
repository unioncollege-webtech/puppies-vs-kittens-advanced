// Require the Express module (https://npmjs.com/package/express)
var express = require('express');

// Create a new express application instance by calling `express()`
var app = express();

// Use Handlebars for templates
app.set('view engine', 'hbs');

// Require counter.js with the counter constructor
var Counter = require("./Counter.js");

// Serve files in the 'public' directory with Express's built-in static file server
app.use(express.static('public'));

// Set up cookie parser
var cookieParser = require("cookie-parser");
app.use(cookieParser());

// Create a new Counter instance, like: `var voteCounter = new Counter()`
var voteCounter = new Counter();

// Respond to 'post' requests for the route '/kittens'
app.post('/kittens', function(req, res){
    
    // If user has cookie, bring up already voted page
    if (req.cookies.remember) {
        res.render('repeat', {});
    }
    
    else {
    res.cookie("remember" , 'cookie_value');
    voteCounter.record('/kittens');
   res.render('vote', {
       animal: 'kittens',
       count: voteCounter.retrieve('/kittens'),
       title: "Vote has been registered!",
       image: "http://7-themes.com/data_images/out/66/6997052-funny-cat.jpg"
   }); 
    }
});

// Respond to 'post' requests for the route '/puppies'
app.post('/puppies', function(req, res){
    
    // If user has cookie, bring up already voted page
    if (req.cookies.remember) {
        res.render('repeat', {});
    }
    
    else {
    res.cookie("remember" , 'cookie_value');
    voteCounter.record('/puppies');
   res.render('vote', {
       animal: 'puppies',
       count: voteCounter.retrieve('/puppies'),
       title: "Vote has been registered!",
       image: "http://www.dogtrainingandobedience.info/wp-content/uploads/2015/05/6ae3c611-8f7a-4185-81fb-af02b9e6027c.jpg"
   }); 
  }
});

// Have the Express application listen for incoming requests on port 8080
app.listen(8080);

console.log("server up!");