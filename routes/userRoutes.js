const {User} = require('../models')

module.exports = app => {

    // GET all users
    app.get('/users', (req, res) => {
        db.query('SELECT * FROM users', (e, users) => {
            if (e) throw e
            res.json(users)
        })
    })

    //GET one user
    app.get('/users/:id', (req, res) => {

    })


    // POST a user
    app.post('/users', (req, res) => {
        User.create(req.body)
        .then(_ => res.sendStatus(200))
        .catch(e => console.log(e))
    })

    //PUT a user
    app.put('users/:id', (req, res) => {

    })

    //DELETE a user
    app.delete('users/:id', (req, res) => {

    })

}