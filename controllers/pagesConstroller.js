exports.home = (req, res) => {
    res.render('home', {
        formMessage: req.flash('form')
    });
};

exports.subPage = (req, res) => {
    res.render('subpage');
}