var express = require('express');
var router = express.Router();
const eventsController = require('../controllers/events')


router.get('/', eventsController.listEvents);


module.exports = router;
