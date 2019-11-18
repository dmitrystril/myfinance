import express from 'express';

const router = express.Router();

router.get('/api/user', (req: express.Request, res: express.Response) => {
	res.json('API is working OK');
});

export default router;
