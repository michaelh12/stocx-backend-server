const router = require('express').Router()
const {Portfolio} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const portfolios = await Portfolio.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
    })
    res.json(portfolios)
  } catch (err) {
    next(err)
  }
})

router.post('/add', async (req, res, next) => {
  try {
    const symbol = req.body.symbol
    const qty = req.body.quantity
    const startPrice = req.body.price

    const newPortfolio = await Portfolio.create({symbol, qty, startPrice})

    res.json(newPortfolio)
  } catch (err) {
    next(err)
  }
})
