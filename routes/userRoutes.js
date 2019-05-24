const db = require('../models')

module.exports = app => {

    // GET all users
    app.get('/users', (req, res) => {
        db.query('SELECT * FROM users', (e, users) => {
            if (e) throw e
            res.json(users)
        })
    })


    // POST a user
    app.post('/users', (req, res) => {
        db.query('INSERT INTO users SET ?', req.body, (e) => {
            if (e) throw e
            res.sendStatus(200)
        })
    })

}