const Venue = require('../models/venue');

module.exports = {
    newEvent,
    create,
    listEvents,
};

function newEvent(req, res) {
    res.render('newEvent', { title: 'Create New Event' });
};

async function create(req, res) {
    try {
        const newVenue = new Venue(req.body);
        await newVenue.save();
        res.redirect('/'); 
    } catch (err) {
        }
    }

async function listEvents(req, res) {
    try {
        const events = await Venue.find();
        res.render('index', { title: 'venue.Me', events: events });
    } catch (err) {
        }
    }


