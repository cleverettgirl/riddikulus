'use strict'

const db = require('APP/db')
const User = db.model('users')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
	.get('/', forbidden('only admins can list users'), (req, res, next) =>
		User.findAll()
		.then(users => {
			res.json(users)
		})
		.catch(next))
	.post('/', (req, res, next) =>
		User.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(next))
	.put('/:id/admin', forbidden('only admins can update users'), (req, res, next) =>
		User.findById(req.params.id)
		.then(user => user.toggleAdmin())
		.then(() => {
			return User.findAll()
		})
		.then(users => {
			res.json(users)
		})
		.catch(next))
	.get('/:id', mustBeLoggedIn, (req, res, next) =>
		User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(next))
	.delete('/:id', forbidden('only admins can delete users'), (req, res, next) =>
		User.findById(req.params.id)
		.then(user => user.deactivateUser())
		.then(() => {
			return User.findAll()
		})
		.then(users => {
			res.json(users)
		}).catch(next))
