import express from 'express';
import multer from 'multer';

import UploadService from '../service/UploadService';

const router = express.Router();
const upload = multer();

router.post(
	'/api/upload',
	upload.single('file'),
	(req: express.Request, res: express.Response) => {
		new UploadService().addTransactionsFromFile(req.file);
		res.sendStatus(200);
	});

export default router;
