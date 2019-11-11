var express = require('express');
var router = express.Router();

router.get('/api/income', (req, res) => {
	res.json('API is working OK; No data for Income yet.');
})

router.get('/api/expenses', (req, res) => {
	res.json('API is working OK; No data for Expenses yet.');
})

let multer = require('multer');
var upload = multer();

router.post('/api/upload', upload.single('file'), function (req, res) {
	console.log('req.file', req.file);

	setTimeout(() => {
		res.sendStatus(200);
	}, 1500);
});

module.exports = router;
