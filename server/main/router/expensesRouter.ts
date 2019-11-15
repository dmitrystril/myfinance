import express from 'express';

const router = express.Router();

router.get('/api/expenses', (req: any, res: any) => {
	res.json('API is working OK; No data for Expenses yet.');
});

export default router;
