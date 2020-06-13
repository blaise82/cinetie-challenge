import express from 'express';
import userController from '../controllers/userController';
import validation from '../validations/user.validate';

const router = express.Router();

router.post('/login', validation, userController.login);

export default router;
