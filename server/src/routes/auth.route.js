import { Router } from 'express';
import authController from '../controllers/auth/auth.controller';
import authMiddleware from '../middlewares/auth.middleware';
import registerController from '../controllers/auth/register.controller';
import loginController from '../controllers/auth/login.controller';

const router = Router();

/* GET */
router.get('/user', authMiddleware, authController);

/* POST */
router.post('/register', registerController);
router.post('/login', loginController);
router.post('/fblogin', loginController);

export default router;
