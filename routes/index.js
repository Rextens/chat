const express = require('express');
const router = express.Router();

const pagesController = require('../controllers/pagesConstroller');
const applicationsController = require('../controllers/applicationsController');

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

router.get('/users/:username', (req, res) => res.render('user', { username: req.params.username }));

module.exports = router;