var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

var app = express();

app.use(cookieParser())

app.set('view engine', 'hbs');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static('public'));

var voteCounter = require("./Counter");

app.get('/', function(req, res){
    res.render('index',{title:"Puppies vs. Kittens", head:"Puppies vs. Kittens", image:"https://i.ytimg.com/vi/gU2ZPcS-bAk/maxresdefault.jpg"}); 
});


app.post('/vote', function(req, res){
    if(req.cookies.voted){
        res.send("No more voting for you!");
    }
    else
    {
        res.cookie('voted', 1);
        var animal = req.body.animal;
        voteCounter.record(animal);
        var image = animal == "Kittens" ? "http://vignette3.wikia.nocookie.net/wikiality/images/3/31/Happy_kity.jpg/revision/latest?cb=20061216202527" : "https://pbs.twimg.com/profile_images/497043545505947648/ESngUXG0.jpeg";
        res.render('vote',{title:"Vote",animal: animal, animalVotes: voteCounter.retrieve(animal), head:"The Results are in!", image:image});
    }
});

// Have the Express application listen for incoming requests on port 8080
app.listen(8080);