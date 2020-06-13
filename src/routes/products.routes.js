import express from 'express';
import productController from '../controllers/productController';
import productValidation from '../validations/product.validate';
import checkLogin from '../middlewares/checkLogin';

const router = express.Router();

router.post('/add', checkLogin, productValidation, productController.add);
router.get('/get-all', checkLogin, productController.getAll);

export default router;
