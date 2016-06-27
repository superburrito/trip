var Express = require('express');
var app = new Express();

// Enable bodyParser
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var morgan = require('morgan');


