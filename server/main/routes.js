var express = require('express')
var router = express.Router()

router.get('/api/testAPI', (req, res) => {
	res.json('API is working OK')
})

module.exports = router
