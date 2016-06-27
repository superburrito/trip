var db = require('./database');
var Sequelize = require('sequelize');
var Place = require('./place');

var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING
	},
	num_stars: {
		type: Sequelize.INTEGER,
		validate: {
			is: ["^[1-5]$"]
		}
	},
	amenities: {
		type: Sequelize.ARRAY(Sequelize.STRING)
	}
});


Hotel.belongsTo(Place);

module.exports = Hotel;
