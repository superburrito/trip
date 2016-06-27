var Express = require('express');
var app = new Express();

// Enable bodyParser
var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('./routes');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', routes);

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
