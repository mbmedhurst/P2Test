// if you have to reclone:
// - run dotenv
// - create new .env file (copy from project 2)
// - delete global package-lock.json folder
// - reinstall npm install

require('dotenv').config()
const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

require('./config').sync()
    .then(_ => app.listen(process.env.PORT || 3001))
    .catch(e => console.log(e))