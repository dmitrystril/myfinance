import express from 'express';

const router = express.Router();

router.get('/api/income', (req: express.Request, res: express.Response) => {
	res.json('API is working OK; No data for Income yet.');
});

export default router;
