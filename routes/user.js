var express = require('express')
var user = require('../services/user')
var router = express.Router()

router.get('/', function(req, res, next) {
  user.getAll()
  .then(function (users) {
    res.json(users)
  })
  .catch(function (err) {
    return res.status(500).send('Something broke')
  })
})

router.post('/register', function(req, res, next) {
  const {name, password}  = req.body
  
  user.create(name, password)
  .then(function (user) {
    if (user) return res.json(user.get({plain: true}))
    return res.status(409).send('User exists')
  })
  .catch(function(err) {
    return res.status(500).send('Something broke')
  })
})

module.exports = router
