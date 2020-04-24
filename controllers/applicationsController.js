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
                
                if(computerIP.indexOf(req.ip) == -1)
                {
                    sessionID.push(results.get('id'));
                    computerIP.push(req.ip);
                    usernames.push(req.body.name);
                }
                else
                {
                    sessionID[computerIP.indexOf(req.ip)] = results.get('id');
                }
            }
            else
            {
                res.redirect('/');
                alert('OwO wrong password');
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
            if(req.body.password == req.body.commitPassword)
            {
                Application.create({
                    'name': req.body.name,
                    'password': req.body.password,
                }).then(function() {       
                    res.redirect('/users/' + req.body.name);
                })
            }
            else
            {
                res.redirect('/register');
            }
        }
        else
        {
            alert('Taki użytkownik już istnieje');
            res.redirect('/register');        
        }
    })
}