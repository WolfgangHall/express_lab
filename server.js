var express = require('express');
var app = express();
var PORT = 3000;


app.get('/', function(req, res) { //home
    res.send('hello express!');
}); 

//add additional routes. Change this to switch/case
app.get('/home', function(req, res) { //aboutMe
    res.send('This is a page about some guy (me) that wants to push keys on a keyboard for a living')
});

app.get('/login', function (req, res) { //portfolio
    res.send('This is all the cool stuff I do with those keystrokes... pretty cool right?')
});

app.get('/account', function (req, res) { //contact
    res.send('This is where you can find me')
});

app.get('/help', function (req, res) { //contact
    res.send('This is where you can find me')
});

//tell the app to listen
app.listen(PORT, function(err){
    console.log('Express server is listening on Port ' + PORT);
})
