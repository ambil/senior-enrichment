const Sequelize = require('sequelize');

const db = require('../index')

const Students = db.define('students', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	fullName: {
		type: Sequelize.VIRTUAL,
		get () {
			return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName')
		}
	},
	email: {
		type: Sequelize.STRING,
		validate: {
			isEmail: true
		}
	},
	gpa: {
		type: Sequelize.DECIMAL,
		validate: {
			min: 0.0,
			max: 4.0
		}
	}
})

module.exports = Students
