import express from 'express';

import ExpensesController from '../controller/ExprensesController';
import ExpensesService from '../service/ExpensesService';

const expensesRouter = express.Router();

const expensesService = new ExpensesService();

expensesRouter.get(
	'/api/expenses',
	(request: express.Request, response: express.Response) => new ExpensesController(expensesService).execute(request, response)
);

export default expensesRouter;
