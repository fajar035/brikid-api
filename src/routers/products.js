const express = require('express');
const productsRouter = express.Router();
const productsController = require('../controllers/products');
const { checkToken } = require('../middleware/authorize');
const upload = require('../middleware/uploadProduct');

productsRouter.get('/', productsController.getAllProducts);
productsRouter.get('/:id', productsController.getByIdProduct);
productsRouter.post('/', checkToken, upload, productsController.createProduct);
productsRouter.patch(
  '/update/:id',
  checkToken,
  upload,
  productsController.updateProduct,
);
productsRouter.delete('/:id', checkToken, productsController.deleteProduct);

module.exports = productsRouter;
