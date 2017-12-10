'use strict'
const apiRouter = require('express').Router()
const app = require('../index')
const Students = require('../db/models/Students')
const Campuses = require('../db/models/Campuses')

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

apiRouter.post('/campuses', (req, res, next) => {
	Campuses.create(req.body)
	.then(campus => res.json(campus))
	.catch(next)
})

apiRouter.delete('/campuses/:id', function(req, res, next) {
	const id = req.params.id

	Campuses.destroy({where: {id}})
		.then(() => res.state(204).end())
		.catch(next)
})

module.exports = apiRouter;
