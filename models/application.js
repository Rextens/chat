const bookshelf = require('../config/bookshelf');

const Application = bookshelf.Model.extend({
    tableName: 'applications'
})

module.exports.create = (addUser) => {
    return new Application({
        name: addUser.name,
        password: addUser.password,
    }).save();
}

module.exports.read = (application) => {
        return new Application({
            
            name: application.name

            }).fetch().catch(Application.NotFoundError, error =>
                console.error(`Unable to find user with given parameters`))
}