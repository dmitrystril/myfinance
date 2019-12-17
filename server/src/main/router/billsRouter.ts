import express from 'express';

import BillsController from '../controller/BillsController';
import BillsService from '../service/BillsService';

const billsRouter = express.Router();

const billsService = new BillsService();

billsRouter.get(
	'/api/bills',
	(request: express.Request, response: express.Response) => new BillsController(billsService).execute(request, response)
);

export default billsRouter;
