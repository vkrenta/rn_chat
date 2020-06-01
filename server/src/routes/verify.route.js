import { Router } from 'express';
import verifyController from '../controllers/auth/verify.controller';

const router = Router();

router.get('/:id', verifyController);

export default router;
