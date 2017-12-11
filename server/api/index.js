'use strict'
const apiRouter = require('express').Router()
const app = require('../index')
const Students = require('../db/models/Students')
const Campuses = require('../db/models/Campuses')

//Campus Routes
apiRouter.get('/campuses', (req, res) => {
	Campuses.findAll({
		include: [
			{ model: Students, as: 'CurrentStudents'}
		]
	})
	.then(campus => res.json(campus))
	.catch(err => console.error(err))
})

apiRouter.get('/campuses/:id', (req, res) => {
	Campuses.findAll({where: {id: req.params.id}})
	.then(campus => res.json(campus))
	.catch(err => console.error(err))
})

apiRouter.post('/campuses', (req, res, next) => {
	Campuses.create(req.body)
	.then(campus => res.json(campus))
	.catch(next)
})

apiRouter.put('/campuses/:id', (req, res, next) => {
	const campusId = req.params.id

	Campuses.findById(campusId)
		.then(campus => campus.update(req.body))
		.then(updatedCampus => res.json(res.body))
		.catch(next)
})

apiRouter.delete('/campuses/:id', function(req, res, next) {
	const id = req.params.id

	Students.destroy({where: {campusId: id}})
		.catch(err => console.error(err))

	Campuses.destroy({where: {id}})
		.then(() => res.status(204).end())
		.catch(next)
})


//Student Routes
apiRouter.get('/students', (req, res) => {
	Students.findAll({
		include: [
			{ model: Campuses }
		]
	})
	.then(student => res.json(student))
	.catch(err => console.error(err))
})

apiRouter.get('/students/:id', (req, res) => {
	Students.findAll({where: {id: req.params.id}})
	.then(student => res.json(student))
	.catch(err => console.error(err))
})

apiRouter.post('/students', (req, res, next) => {
	Students.create(req.body)
	.then(student => res.json(student))
	.catch(next)
})

apiRouter.put('/students/:id', (req, res, next) => {
	const studentId = req.params.id

	Students.findById(studentId)
		.then(student => student.update(req.body))
		.then(updatedStudent => res.json(res.body))
		.catch(next)
})

apiRouter.delete('/students/:id', function(req, res, next) {
	const id = req.params.id

	Students.destroy({where: {id}})
		.then(() => res.status(204).end())
		.catch(next)
})

module.exports = apiRouter;
