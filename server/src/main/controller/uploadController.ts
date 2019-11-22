import express from 'express';
import multer from 'multer';

import UploadService from '../service/UploadService';

const router = express.Router();
const upload = multer();

router.post(
	'/api/upload',
	upload.single('file'),
	async (req: express.Request, res: express.Response) => {
		const addedTransactionDtoList = await new UploadService().addTransactionsFromFile(req.file);
		res.status(200).json({ rows_affected: addedTransactionDtoList.length });
	});

export default router;
