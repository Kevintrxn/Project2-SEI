const Venue = require('../models/venue');

function newEvent(req, res) {
    res.render('newEvent', { title: 'Create New Event' });
}

async function create(req, res) {
    try {
        const newVenue = new Venue(req.body);
        newVenue.user = req.user._id;
        await newVenue.save();
        res.redirect('/'); 
    } catch (err) { }
}

async function listEvents(req, res) {
    try {
        const events = await Venue.find().populate({
            path: 'comments.user',
            select: 'name'
        });
        res.render('index', { title: 'venue.Me', events: events });
    } catch (err) { }
}

async function editEventForm(req, res) {
    try {
        const event = await Venue.findById(req.params.id);
        if (!event || !event.user.equals(req.user._id)) {
            return;
        }
        res.render('editEvent', { event: event, title: 'Edit Event' });
    } catch (err) { }
}

async function updateEvent(req, res) {
    try {
        const event = await Venue.findById(req.params.id);
        if (!event || !event.user.equals(req.user._id)) {
            return; 
        }
        await Venue.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/');
    } catch (err) { }
}

async function deleteEvent(req, res) {
    try {
        const event = await Venue.findById(req.params.id);
        if (!event || !event.user.equals(req.user._id)) {
            return; 
        }
        await Venue.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) { }
}

async function addComment(req, res) {
    try {
        const event = await Venue.findById(req.params.id);
        if (!event) {
            return;
        }
        event.comments.push({
            comment: req.body.comment,
            user: req.user._id
        });
        await event.save();
        res.redirect('/');
    } catch (err) { }
}

async function editCommentForm(req, res) {
    try {
        const event = await Venue.findById(req.params.eventId);
        const comment = event.comments.id(req.params.commentId);
        if (!comment || !comment.user.equals(req.user._id)) {
            return; 
        }
    } catch (err) { }
}

async function updateComment(req, res) {
    try {
        const event = await Venue.findById(req.params.eventId);
        const comment = event.comments.id(req.params.commentId);
        if (!comment || !comment.user.equals(req.user._id)) {
            return; 
        }
        comment.comment = req.body.comment;
        await event.save();
        res.redirect('/');
    } catch (err) { }
}

async function deleteComment(req, res) {
    try {
        const event = await Venue.findById(req.params.eventId);
        if (!event) {
            return res.redirect('/');
        }
        const comment = event.comments.id(req.params.commentId);
        if (!comment || !comment.user.equals(req.user._id)) {
            return res.redirect('/');
        }
        event.comments.pull({ _id: req.params.commentId });
        await event.save();
        res.redirect('/');
    } catch (err) {
        res.redirect('/');
    }
}

module.exports = {
    newEvent,
    create,
    listEvents,
    editEventForm,
    updateEvent,
    deleteEvent,
    addComment,
    editCommentForm,
    updateComment,
    deleteComment,
};
