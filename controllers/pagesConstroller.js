exports.home = (req, res) => {
    res.render('home');
};

exports.subPage = (req, res) => {
    res.render('subpage');
}

exports.register = (req, res) => {
    res.render('register', {
        formMessage: req.flash('form')
    });
}

exports.creatures = (req, res) => {
    res.render('creatures', {
        
    });
}


