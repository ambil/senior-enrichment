const Sequelize = require('sequelize');
const Students = require('./Students')
const db = require('../index')

const Campuses = db.define('campuses', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue: 'https://www.greatvaluecolleges.net/wp-content/uploads/2016/01/university-washington-cheapest-colleges-most-beautiful-college-campuses-1024x626.jpg'
	},
	description: {
		type: Sequelize.TEXT
	}
})

module.exports = Campuses
