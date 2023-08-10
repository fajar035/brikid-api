const express = require('express');
const authController = require('../controllers/auth');
const authRouter = express.Router();
const { checkToken } = require('../middleware/authorize');

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.delete('/logout', checkToken, authController.logout);

module.exports = authRouter;
