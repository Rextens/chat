exports.store = (req, res) => {
    /*
    res.json({
        'testInput': req.body.testInput
    });
    */

    req.flash('form', req.body.testInput + 'You are a true hero');
    res.redirect('/');
};