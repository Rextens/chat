const express = require('express');
const router = express.Router();

const pagesController = require('../controllers/pagesConstroller');
const applicationsController = require('../controllers/applicationsController');
const Application = require('../models/application');
const Loggining = require('../loggining');

router.get('/', (req, res) => {
    res.render('home');
}); 

router.get('/', pagesController.home);
router.post('/applications', applicationsController.store);

router.get('/views/subpage', pagesController.subPage);
router.get('/views/register', pagesController.register);

router.get('/register', (req, res) => {
    res.render('register');
}); 

router.get('/configureProfile', (req, res) => {
    res.render('configureProfile', 
    {
        userID: sessionID[computerIP.indexOf(req.connection.remoteAddress)],
    });
})

router.get('/users/:username', (req, res) => {
    Application.read({
        'name': req.params.username
    }).then(function(results) {
        if(results == null)
        {
            res.redirect('/');
        }
        else
        {
            res.render('user', 
            { 
                username: req.params.username, 
                id: results.get('id'), 
                profileImage: results.get('profileimage'),
            });          
        }
    })  
});


module.exports = router;