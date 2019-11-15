import express from 'express';

const router = express.Router();

router.get('/api/income', (req: any, res: any) => {
	res.json('API is working OK; No data for Income yet.');
});

export default router;
