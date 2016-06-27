var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var db = require('./models/database');
var Activity = require('./models/activity');
var Hotel = require('./models/hotel');
var Place = require('./models/place');
var Restaurant = require('./models/restaurant');
var Promise = require('bluebird');

router.get('/', function(req,res,next){
	var ActivityProm = Activity.findAll({});
	var HotelProm = Hotel.findAll({});
	var PlaceProm = Place.findAll({});
	var RestaurantProm = Restaurant.findAll({});
	Promise.all([ActivityProm, HotelProm, PlaceProm, RestaurantProm])
	.then(function(data){
		console.log(data);
		res.render('index', {templateActivity: data[0],
												 templateHotel: data[1],
												 templatePlace: data[2],
												 templateRestaurant: data[3]});
	})
	.catch(next);
});



