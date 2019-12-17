import express from 'express';

import ExpensesController from '../controller/ExprensesController';
import ExpensesService from '../service/ExpensesService';
import ExprensesCategoryController from '../controller/ExprensesCategoryController';

const expensesRouter = express.Router();

const expensesService = new ExpensesService();

expensesRouter.get(
	'/api/expenses',
	(request: express.Request, response: express.Response) => new ExpensesController(expensesService).execute(request, response)
);

expensesRouter.post(
	'/api/expenses/category',
	(request: express.Request, response: express.Response) => new ExprensesCategoryController(expensesService).execute(request, response)
);

export default expensesRouter;
