var db = require('./database');
var Sequelize = require('sequelize');
var Place = require('./place');

var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING
	},
	num_stars: {
		type: Sequelize.FLOAT
	},
	amenities: {
		type: Sequelize.STRING
	}
});


Hotel.belongsTo(Place);

module.exports = Hotel;
