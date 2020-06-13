import { Router } from 'express';
import userRoutes from './users.routes';
import productRoutes from './products.routes';

const router = Router();

router.use('/api/v1/auth', userRoutes);
router.use('/api/v1/product', productRoutes);

export default router;
