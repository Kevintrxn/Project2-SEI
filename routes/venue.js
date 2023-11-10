var express = require('express');
var router = express.Router();
const eventsController = require('../controllers/events');

router.get('/events/new', eventsController.newEvent);
router.get('/events', eventsController.listEvents);
router.get('/events/edit/:id', eventsController.editEventForm);

router.post('/events', eventsController.create);

router.put('/events/edit/:id', eventsController.updateEvent);

router.delete('/events/delete/:id', eventsController.deleteEvent);

module.exports = router;