const Venue = require('../models/venue');

function newEvent(req, res) {
    res.render('newEvent', { title: 'Create New Event' });
};

async function create(req, res) {
    try {
        const newVenue = new Venue(req.body);
        await newVenue.save();
        res.redirect('/venue/events');
    } catch (err) {
        console.error(err);
        res.status(400).render('create-event', { 
            title: 'Create New Event',
            errorMsg: 'Error creating event'
        });
    }
}

async function listEvents(req, res) {
    try {
        const events = await Venue.find();
        res.render('eventsList', { events: events }); 
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching events');
    }
}

module.exports = {
    newEvent,
    create,
    listEvents,
};