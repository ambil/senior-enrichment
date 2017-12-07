'use strict';
const db = require('../index')

const Students = require('./Students')
const Campuses = require('./Campuses')

Students.belongsTo(Campuses)

module.exports = {
	db,
	Students,
	Campuses
}








