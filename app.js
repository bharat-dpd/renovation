// app.js

// require the packages we need
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
var routes     = require('./routes/routes.js');

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
var port = 5555;
routes(app);
app.listen(5555);
console.log('Magic happens on port ' + port);