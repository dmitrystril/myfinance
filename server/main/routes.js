var express = require('express')
var router = express.Router()

router.get('/api/income', (req, res) => {
	res.json('API is working OK; No data for Income yet.')
})

router.get('/api/expenses', (req, res) => {
	res.json('API is working OK; No data for Expenses yet.')
})

module.exports = router
