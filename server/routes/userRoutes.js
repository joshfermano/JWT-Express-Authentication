import express from 'express';
import { register, login, logout } from '../controller/userController.js';
import {
  validateRegister,
  validateLogin,
} from '../middlewares/validateUser.js';

const router = express.Router();

router.post('/register', validateRegister, register);

router.post('/login', validateLogin, login);

router.post('/logout', logout);

export default router;
