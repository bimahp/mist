var express = require('express')
var models = require('../models')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

router.post('/register', function(req, res, next) {
  models.sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.')
    res.json({ok: true})
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err)
    res.json({ok: false})
  })
})

module.exports = router
