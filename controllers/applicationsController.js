const Application = require('../models/application');



exports.store = (req, res) => {
    
    Application.read({
        'name': req.body.name,
    }).then(function(results) {

        if(results == null)
        {
            res.redirect('/');
        }
        else
        {
            res.redirect('/users/' + req.body.name);
            console.log(results.get('password'));
        }
    })
    
};