import express from 'express';

const router = express.Router();

router.get('/api/user', (req: any, res: any) => {
	res.json('API is working OK');
});

export default router;
