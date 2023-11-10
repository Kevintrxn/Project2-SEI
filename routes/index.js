var express = require('express');
var router = express.Router();
const passport = require('passport');

const eventsController = require('../controllers/events')


router.get('/', eventsController.listEvents);

router.get('/auth/google', passport.authenticate(
    'google',
    {
    scope: ['profile', 'email'],
    }
));


router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: '/',
        failureRedirect: '/',
    }
));


router.get('/logout', function(req, res){
    req.logout(function() {
    res.redirect('/');
    });
});

module.exports = router;
