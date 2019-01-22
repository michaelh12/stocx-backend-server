const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Portfolio = db.define('Portfolio', {
  symbol: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  startPrice: {
    type: Sequelize.NUMERIC(18, 4),
    allowNull: false
  },
  currentPrice: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.getDataValue('startPrice')
    }
  }
})

module.exports = Portfolio
