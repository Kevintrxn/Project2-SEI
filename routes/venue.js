var express = require('express');
var router = express.Router();
const eventsController = require('../controllers/events');




router.get('/events/new', eventsController.newEvent);
router.get('/events', eventsController.listEvents)

router.post('/events', eventsController.create);

module.exports = router;