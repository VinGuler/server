import { Router, Request, Response } from 'express';

const router = Router();

router.get('/my-info', (req: Request, res: Response) => {
    res.json({ content: "This is my info" });
});

export default router;