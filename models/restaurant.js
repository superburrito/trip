var db = require('./database');
var Sequelize = require('sequelize');
var Place = require('./place');

var Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING
	},
	cuisine: {
		type: Sequelize.STRING
	},
	price: {
		type: Sequelize.INTEGER,
		validate: {
			is: ["^[1-5]$"]
		}
	}
});


Restaurant.belongsTo(Place);

module.exports = Restaurant;