import express from 'express';

import IndexController from '../controller/IndexController';

const indexRouter = express.Router();

indexRouter.get(
	'/',
	(request: express.Request, response: express.Response) => new IndexController().execute(request, response),
);

export default indexRouter;
