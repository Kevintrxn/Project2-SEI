var express = require('express');
var router = express.Router();
const eventsController = require('../controllers/events');


router.get('/events/new', eventsController.newEvent);
router.get('/events', eventsController.listEvents);
router.get('/events/edit/:id', eventsController.editEventForm);
router.put('/events/edit/:id', eventsController.updateEvent);
router.delete('/events/:id', eventsController.deleteEvent);
router.post('/events', eventsController.create);


router.post('/events/:id/comments', eventsController.addComment);
router.put('/events/:eventId/comments/:commentId', eventsController.updateComment);
router.delete('/events/:eventId/comments/:commentId', eventsController.deleteComment);

module.exports = router;