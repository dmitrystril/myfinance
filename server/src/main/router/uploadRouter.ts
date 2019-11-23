import express from 'express';
import multer from 'multer';

import UploadService from '../service/UploadService';
import UploadController from '../controller/UploadController';

const uploadRouter = express.Router();

const upload = multer();

const uploadService = new UploadService();

uploadRouter.post(
	'/api/upload',
	upload.single('file'),
	async (request: express.Request, response: express.Response) =>
		new UploadController(uploadService).execute(request, response),
);

export default uploadRouter;
