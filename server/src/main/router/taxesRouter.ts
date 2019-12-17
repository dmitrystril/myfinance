import express from 'express';

import TaxesController from '../controller/TaxesController';
import TaxesService from '../service/TaxesService';

const taxesRouter = express.Router();

const taxesService = new TaxesService();

taxesRouter.get(
	'/api/taxes',
	(request: express.Request, response: express.Response) => new TaxesController(taxesService).execute(request, response)
);

export default taxesRouter;
