const Application = require('../models/application');

exports.store = (req, res) => {
    /*
    res.json({
        'testInput': req.body.testInput
    });
    */
    Application.create({
        'name': req.body.name,
        'password': req.body.password
    }).then(function() {
        req.flash('form', req.body.name + 'You are a true hero');
        res.redirect('/');
    })
};