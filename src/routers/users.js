const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/users');
const { checkToken } = require('../middleware/authorize');
const upload = require('../middleware/upload');
const getUsers = require('../middleware/getUser');

usersRouter.get('/', checkToken, usersController.getAllUsers);
usersRouter.get('/:id', checkToken, usersController.getByIdUser);
usersRouter.patch(
  '/update',
  checkToken,
  upload,
  getUsers.getUser,
  usersController.updateUser,
);

module.exports = usersRouter;
