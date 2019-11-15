import express from 'express';

const router = express.Router();

router.get('/', (req: any, res: any) => {
  res.json('API is working OK');
});

export default router;
