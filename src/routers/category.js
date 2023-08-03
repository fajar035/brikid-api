const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controllers/category');
const { checkToken } = require('../middleware/authorize');

categoryRouter.get('/', categoryController.getAllCategory);
categoryRouter.post('/', checkToken, categoryController.createCategory);
categoryRouter.patch('/:id', checkToken, categoryController.updateCategory);
categoryRouter.delete('/:id', checkToken, categoryController.deleteCategory);

module.exports = categoryRouter;
