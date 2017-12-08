'use strict'
const apiRouter = require('express').Router()
const app = require('../index')
const Students = require('../db/models/Students')
const Campuses = require('../db/models/Campuses')

apiRouter.get('/campuses', (req, res) => {
	Campuses.findAll()
	.then(campus => res.json(campus))
	.catch(err => console.error(err))
})

apiRouter.get('/campuses/:id', (req, res) => {
	Campuses.findAll({where: {id: req.params.id}})
	.then(campus => res.json(campus))
	.catch(err => console.error(err))
})

apiRouter.get('/students', (req, res) => {
	Students.findAll()
	.then(student => res.json(student))
	.catch(err => console.error(err))
})

apiRouter.get('/students/:id', (req, res) => {
	Students.findAll({where: {id: req.params.id}})
	.then(student => res.json(student))
	.catch(err => console.error(err))
})

apiRouter.post('/students', (req, res, next) => {
	Students.findOrCreate(req.body)
	.then(student => res.json(student))
	.catch(next)
})

apiRouter.post('/campuses', (req, res, next) => {
	Campuses.findOrCreate(req.body)
	.then(campus => res.json(campus))
	.catch(next)
})

module.exports = apiRouter;
