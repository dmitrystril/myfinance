import express from 'express';

import IncomeController from '../controller/IncomeController';
import IncomeService from '../service/IncomeService';

const incomeRouter = express.Router();

const incomeService = new IncomeService();

incomeRouter.get(
	'/api/income',
	(request: express.Request, response: express.Response) => new IncomeController(incomeService).execute(request, response)
);

export default incomeRouter;
