const productsModel = require('../models/products');
const resHelper = require('../helpers/response');
const { sku } = require('../helpers/generateSku');

const getAllProducts = (req, res) => {
  const { query } = req;
  let keyword = `%%`;
  if (query.search) keyword = `'%${query.search}%'`;
  const newQuery = {
    ...query,
    search: keyword,
    page: parseInt(query.page),
    limit: parseInt(query.limit),
  };

  productsModel
    .getAllProducts(newQuery)
    .then(({ status, result }) => resHelper.success(res, status, result))
    .catch(({ status, err }) => resHelper.failed(res, status, err));
};

const getByIdProduct = (req, res) => {
  const { id } = req.params;

  productsModel
    .getByIdProduct(id)
    .then(({ status, result }) => resHelper.success(res, status, result))
    .catch(({ status, err }) => resHelper.failed(res, status, err));
};

const createProduct = (req, res) => {
  const { body, file } = req;
  const { name, description, weight, width, length, height, price, category } =
    body;

  if (
    typeof name === 'undefined' ||
    typeof description === 'undefined' ||
    typeof weight === 'undefined' ||
    typeof width === 'undefined' ||
    typeof length === 'undefined' ||
    typeof height === 'undefined' ||
    typeof price === 'undefined' ||
    typeof category === 'undefined'
  )
    return resHelper.failed(res, 400, {
      status: 400,
      err: { message: 'Please fill in all the fields.' },
    });

  if (!file)
    return resHelper.failed(res, 400, {
      status: 400,
      err: { message: 'Please fill in all the fields.' },
    });

  const generateSku = sku();
  const image = file.path;
  const id_category = body.category;
  const createdAt = new Date(
    new Date(new Date(new Date()).toISOString()).getTime() -
      new Date().getTimezoneOffset() * 60000,
  )
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ');

  const newBody = {
    name,
    description,
    sku: generateSku,
    weight,
    height,
    width,
    length,
    image,
    price,
    createdAt,
    id_category,
  };

  productsModel
    .createProduct(newBody)
    .then(({ status, result }) => resHelper.success(res, status, result))
    .catch(({ status, err }) => resHelper.failed(res, status, err));
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  let { body, urlPhoto, file } = req;

  if (!file) {
    body = {
      ...body,
    };
  } else {
    body = {
      ...body,
      image: urlPhoto,
    };
  }

  productsModel
    .updateProduct(body, id)
    .then(({ status, result }) => resHelper.success(res, status, result))
    .catch(({ status, err }) => resHelper.failed(res, status, err));
};

const deleteProduct = (req, res) => {
  const { id } = req.params;

  productsModel
    .deleteProduct(id)
    .then(({ status, result }) => resHelper.success(res, status, result))
    .catch(({ status, err }) => resHelper.failed(res, status, err));
};

module.exports = {
  getAllProducts,
  getByIdProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
