const Sequelize = require('sequelize')
const sequelize = require('../config')

let User = require('./User.js')(sequelize, Sequelize)
// let Events = require('./events.js')(sequelize, Sequelize)
// let Gifts = require('./gifts.js')(sequelize, Sequelize)
// let Purchases = require('./Purchases.js')(sequelize, Sequelize)



module.exports = {
    User
  //   Events,
  //   Gifts,
  //   Purchases
  }