const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/users');
const { checkToken } = require('../middleware/authorize');
const upload = require('../middleware/upload');
const getData = require('../middleware/getData');

usersRouter.get('/', checkToken, usersController.getAllUsers);
usersRouter.get('/:id', checkToken, usersController.getByIdUser);
usersRouter.patch(
  '/update',
  checkToken,
  upload,
  getData.user,
  usersController.updateUser,
);

module.exports = usersRouter;
