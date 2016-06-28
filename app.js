var Express = require('express');
var app = new Express();
var swig = require('swig');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('./routes');
var Promise = require('bluebird');

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

// Boilerplate for morgan
app.use(morgan('dev'));

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({cache: false});

// Sync-ing database??
// Server listens on port 5000
app.listen(3000, function(){
		console.log('Server is listening on port 5000!');
});


// Routing Begins
app.use('/', routes);


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
