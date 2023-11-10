var express = require('express');
var router = express.Router();
const eventsController = require('../controllers/events');


router.get('/events/new', eventsController.newEvent);
router.get('/events', eventsController.listEvents);
router.get('/events/edit/:id', eventsController.editEventForm);
router.get('/events/:eventId/comments/:commentId/edit', eventsController.editCommentForm);

router.put('/events/edit/:id', eventsController.updateEvent);

router.post('/events', eventsController.create);
router.post('/events/:id/comments', eventsController.addComment);

router.post('/events/:eventId/comments/:commentId', eventsController.updateComment); 

router.delete('/events/delete/:id', eventsController.deleteEvent);

router.delete('/events/:eventId/comments/:commentId', eventsController.deleteComment);



module.exports = router;