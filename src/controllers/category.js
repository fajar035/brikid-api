const categoryModel = require('../models/category');
const resHelper = require('../helpers/response');

const getAllCategory = (req, res) => {
  categoryModel
    .getAllCategory()
    .then(({ status, result }) => resHelper.success(res, status, result))
    .catch(({ status, err }) => resHelper.failed(res, status, err));
};

const createCategory = (req, res) => {
  const { body } = req;
  categoryModel
    .createCategory(body)
    .then(({ status, result }) => resHelper.success(res, status, result))
    .catch(({ status, err }) => resHelper.failed(res, status, err));
};

const updateCategory = (req, res) => {
  const { body } = req;
  const { id } = req.params;
  categoryModel
    .updateCategory(body, id)
    .then(({ status, result }) => resHelper.success(res, status, result))
    .catch(({ status, err }) => resHelper.failed(res, status, err));
};

const deleteCategory = (req, res) => {
  const { id } = req.params;
  categoryModel
    .deleteCategory(id)
    .then(({ status, result }) => resHelper.success(res, status, result))
    .catch(({ status, err }) => resHelper.failed(res, status, err));
};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
