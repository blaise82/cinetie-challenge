import { Router } from 'express';
import userRoutes from './users.routes';

const router = Router();

router.use('/api/v1/auth', userRoutes);

export default router;
