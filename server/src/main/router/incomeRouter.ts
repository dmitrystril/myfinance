import express from 'express';

import IncomeController from '../controller/IncomeController';

const incomeRouter = express.Router();

incomeRouter.get(
	'/api/income',
	(request: express.Request, response: express.Response) => new IncomeController().execute(request, response)
);

export default incomeRouter;
