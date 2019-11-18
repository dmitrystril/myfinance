import express from 'express';

const router = express.Router();

router.get('/api/expenses', (req: express.Request, res: express.Response) => {
	res.json('API is working OK; No data for Expenses yet.');
});

export default router;
