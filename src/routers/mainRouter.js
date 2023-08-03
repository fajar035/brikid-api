const express = require('express');
const mainRouter = express.Router();

const authRouter = require('./auth');
const usersRouter = require('./users');
const productsRouter = require('./products');

mainRouter.use('/auth', authRouter);
mainRouter.use('/users', usersRouter);
mainRouter.use('/products', productsRouter);

mainRouter.get('/', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

module.exports = mainRouter;
