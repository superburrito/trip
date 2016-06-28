var express = require('express');
var app = express();
var swig = require('swig');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('./routes');
var Promise = require('bluebird');
var path = require('path');

// Database
var db = require('./models/database.js');
/*var Place = require('./models/place');
var Hotel = require('./models/hotel');
var Restaurant = require('./models/restaurant');
var Activity = require('./models/activity');
*/

// Boilerplate for bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Routing Begins
app.use('/', routes);


// Add static access to public stylesheets
app.use(express.static(path.join(__dirname, '/public')));

// Boilerplate for morgan
app.use(morgan('dev'));

// Boilerplate for Swig
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({cache: false});

// Sync-ing database??
// Server listens on port 
app.listen(3000, function(){
		console.log('Server is listening on port 3000!');
});


// Default Error Handlers
app.use(function(req,res,next){
	var err = new Error('Not found');
	err.status = 404;
	next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render(
    // ... fill in this part
  );
});
