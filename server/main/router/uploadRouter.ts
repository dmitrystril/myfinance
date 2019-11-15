var express = require('express');
var router = express.Router();

var multer = require('multer');
var upload = multer();

var uploadService = require('../service/uploadService.ts');

router.post('/api/upload', upload.single('file'), function (req, res) {
	uploadService.uploadStatementFile(req.file);
	res.sendStatus(200);
});

module.exports = router;
