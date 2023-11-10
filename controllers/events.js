const Venue = require('../models/venue');

function newEvent(req, res) {
    res.render('newEvent', { title: 'Create New Event' });
}

function newEvent(req, res) {
    res.render('newEvent', { title: 'Create New Event' });
};

async function create(req, res) {
    try {
        const newVenue = new Venue(req.body);
        await newVenue.save();
        res.redirect('/'); 
    } catch (err) { }
}

async function listEvents(req, res) {
    try {
        const events = await Venue.find();
        res.render('index', { title: 'venue.Me', events: events });
    } catch (err) { }
}

    async function editEventForm(req, res) {
        try {
            const event = await Venue.findById(req.params.id);
            res.render('editEvent', { event: event, title: 'Edit Event' });
        } catch (err) { }
}
    
    async function updateEvent(req, res) {
        try {
            await Venue.findByIdAndUpdate(req.params.id, req.body);
            res.redirect('/');
        } catch (err) { }
}
    
    async function deleteEvent(req, res) {
        try {
            await Venue.findByIdAndDelete(req.params.id);
            res.redirect('/');
        } catch (err) { } 
}

module.exports = {
    newEvent,
    create,
    listEvents,
    editEventForm,
    updateEvent,
    deleteEvent
};
