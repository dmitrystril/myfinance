import express from 'express';
import multer from 'multer';

import uploadService from '../service/uploadService';

const router = express.Router();
const upload = multer();

router.post('/api/upload', upload.single('file'), function (req: express.Request, res: express.Response) {
	uploadService.uploadStatementFile(req.file);
	res.sendStatus(200);
});

export default router;
