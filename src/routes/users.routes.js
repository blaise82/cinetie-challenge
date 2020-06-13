import express from 'express';
import userController from '../controllers/userController';
import validation from '../validations/user.validate';
import checkLogin from '../middlewares/checkLogin';
import checkIfUserExists from '../middlewares/checkIfUserExists';
import validateEmail from '../validations/register.validate';
import checkAdmin from '../middlewares/checkAdmin';

const router = express.Router();

router.post('/login', validation, userController.login);
router.post('/register', validateEmail, checkLogin, checkAdmin, checkIfUserExists, userController.register);

export default router;
