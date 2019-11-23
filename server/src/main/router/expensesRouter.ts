import express from 'express';

import ExpensesController from '../controller/ExprensesController';

const expensesRouter = express.Router();

expensesRouter.get(
	'/api/expenses',
	(request: express.Request, response: express.Response) => new ExpensesController().execute(request, response)
);

export default expensesRouter;
