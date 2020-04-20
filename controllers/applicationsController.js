var Application = require('../models/application');
const Loggining = require('../loggining');


exports.store = (req, res) => {
    /***************************************************************/
    Application.read({
        'name': req.body.name
    }).then(function(results) {

        if(results == null)
        {
            res.redirect('/');
        }
        else
        {
            if(req.body.password == results.get('password'))
            {
                res.redirect('/users/' + req.body.name);
                
                if(computerIP.indexOf(req.connection.remoteAddress) == -1)
                {
                    sessionID.push(results.get('id'));
                    computerIP.push(req.connection.remoteAddress);
                }
                else
                {
                    sessionID[computerIP.indexOf(req.connection.remoteAddress)] = results.get('id');
                }
                console.log(computerIP.length);
            }
            else
            {
                res.redirect('/');
                console.log('OwO wrong password');
            }
        }
    })   
};

exports.addUser = (req, res) => {

    Application.read({
        'name': req.body.name
    }).then(function(results){

        if(results == null)
        {
            Application.create({
                'name': req.body.name,
                'email': req.body.email,
                'password': req.body.password,
                'commitPassoword': req.body.commitPassoword
            }).then(function() {       
                res.redirect('/users/' + req.body.name);
            })
        }
        else
        {
            req.flash('form', 'Taki użytkownik już istnieje');
            res.redirect('/register');        
        }
    })
}