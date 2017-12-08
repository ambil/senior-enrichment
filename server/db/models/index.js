'use strict';
const db = require('../index')

const Students = require('./Students')
const Campuses = require('./Campuses')

Students.belongsTo(Campuses)
Campuses.hasMany(Students, {as: 'CurrentStudents'})

module.exports = {
	db,
	Students,
	Campuses
}








