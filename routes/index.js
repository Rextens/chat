const express = require('express');
const router = express.Router();

const pagesController = require('../controllers/pagesConstroller');
const applicationsController = require('../controllers/applicationsController');

router.get('/', (req, res) => {
    res.render('home');
});


router.get('/', pagesController.home);
router.post('/views/subpage', applicationsController.store);

router.get('/views/subpage', pagesController.subPage);

module.exports = router;