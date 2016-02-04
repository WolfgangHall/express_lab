var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000;


app.use(bodyParser.urlencoded({extended: false}));


//add additional routes. Change this to switch/case
app.get('/home', function(req, res) { //aboutMe
    res.sendFile(process.cwd() + "/views/home.html");
});

app.get('/login', function (req, res) { //portfolio
    res.sendFile(process.cwd() + "/views/login.html");
});

app.get('/account', function (req, res) { //contact
    res.sendFile(process.cwd() + "/views/account.html");
});

app.get('/help', function (req, res) { //contact
    res.sendFile(process.cwd() + "/views/help.html");
});

app.post("/login", function(req, res) {
  console.log(req.body);
  var myHTML = "<h1>Email: " + req.body.email + "</h1>";
  myHTML += "<h1>Password: " + req.body.password + "</h1>";

  res.redirect('/help');
});

//tell the app to listen
app.listen(PORT, function(err){
    console.log('Express server is listening on Port ' + PORT);
})
