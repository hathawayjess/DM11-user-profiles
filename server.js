var express = require('express');         //express is a Node.js framework - makes routing simple, allows many extensions and useful features
var bodyParser = require('body-parser');  //middleware that will populate the req.body property 
var session = require('express-session'); //allows us to track users as they navigate around the site
var cors = require('cors');               //enables cross-origin resource sharing - takes care of all those ugly headers for us
var config = require('./config.js');      //config.js is a separate file where we keep the password secret used with session
var profileCtrl = require('./controllers/profileCtrl'); //it's a good idea to separate endpoint logic to controller files
var userCtrl = require('./controllers/userCtrl');       //it keeps code modular, easier to read, and limits conflicts when working on a team     

var app = express();                      //initializes express app
var corsOptions = {
	origin: 'http://localhost:3000'
}

app.use(bodyParser.json());               //json is one of many methods on bodyParser - see https://github.com/expressjs/body-parser for more
app.use(cors(corsOptions));               //by passing in corsOptions, we are enabling cors only for http://localhost:3000
app.use(session({ secret: config.sessionSecret, resave: true, saveUninitialized: true })); //session secret provides extra security, these extra 2 options get rid of the "WARNING deprecated" message
app.use(express.static(__dirname + '/public')); //serves static files from the public folder so we can access them in the browser without running live-server



app.post('/api/login', userCtrl.login);           //post endpoint - points to login method in userCtrl.js file
app.get('/api/profiles', profileCtrl.getFriends); //get endpoint - points to getFriends method in profileCtrl.js file




var port = 3000;
app.listen(port, function() {                   //binds and listens for connections on specified port
	console.log('Listening on port ', port);    //returns an http.Server object and fires callback
})                                              //more info here - https://nodejs.org/api/http.html#http_class_http_server