// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express') // call express
var cors = require('cors')
var app = express() // define our app using express
var bodyParser = require('body-parser')
var EmailCtrl = require('./mailCtrl')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 8081 // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router() // get an instance of the express Router

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router)

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
  res.json({ message: 'hooray! welcome to our api!' })
})

// email route
router.post('/email', EmailCtrl.sendEmail)

// START THE SERVER
// =============================================================================
app.listen(port)
console.log('Magic happens on port ' + port)
