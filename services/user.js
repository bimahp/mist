var models = require('../models')
var bcrypt = require('bcrypt')
var uuid = require('uuid')
var user = {}

const saltRounds = 10

// Fetch all user
user.getAll = function () {
	return models.User.findAll()
}

// Create user
user.create = function (name, password) {
	var _uuid = uuid.v4()

	return bcrypt.hash(password, saltRounds)
	.then(function (hash) {
		return models.User.findOrCreate(
		{
			where: {name},
			defaults: {
				uuid: _uuid,
				name,
				password: hash
			}
		})
		.spread(function (user, created) {
			if (created) return user.get({plain: true})

			// Return false if user exists
			return created
		})
	})
}

module.exports = user