const usersModel = require('../models/users');
const resHelper = require('../helpers/response');

const getAllUsers = (req, res) => {
  const { query } = req;
  let keyword = `%%`;
  if (query.search) keyword = `'%${query.search}%'`;
  const newQuery = {
    ...query,
    search: keyword,
    page: parseInt(query.page),
    limit: parseInt(query.limit),
  };
  usersModel
    .getAllUsers(newQuery)
    .then(({ status, result }) => resHelper.success(res, status, result))
    .catch(({ status, err }) => resHelper.failed(res, status, err));
};

const getByIdUser = (req, res) => {
  const { id } = req.params;

  usersModel
    .getByIdUser(id)
    .then(({ status, result }) => resHelper.success(res, status, result))
    .catch(({ status, err }) => resHelper.failed(res, status, err));
};

const updateUser = (req, res) => {
  let { bodyOld, body, urlPhoto, userInfo, file } = req;

  if (!file) {
    body = {
      ...body,
    };
  } else {
    body = {
      ...body,
      photo: urlPhoto,
    };
  }

  usersModel
    .updateUser(body, bodyOld, userInfo)
    .then(({ status, result }) => resHelper.success(res, status, result))
    .catch(({ status, err }) => resHelper.failed(res, status, err));
};

module.exports = { getAllUsers, getByIdUser, updateUser };
