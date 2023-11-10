var express = require('express');
var router = express.Router();
const passport = require('passport');

const eventsController = require('../controllers/events')


router.get('/', eventsController.listEvents);
// Google OAuth login route
router.get('/auth/google', passport.authenticate(
    // Which passport strategy is being used?
    'google',
    {
      // Requesting the user's profile and email
    scope: ['profile', 'email'],
      // Optionally force pick account every time
      // prompt: "select_account"
    }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: '/venue.js',
        failureRedirect: '/venue.js'
    }
));

  // OAuth logout route
router.get('/logout', function(req, res){
    req.logout(function() {
    res.redirect('/venue.js');
    });
});

module.exports = router;
