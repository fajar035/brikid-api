const db = require('../configs/db');
const resHelper = require('../helpers/response');

const getUser = (req, res, next) => {
  const { id } = req.userInfo;

  const sql = 'SELECT id, name, email, photo FROM users WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) resHelper.fail(res, { err });

    const getUserDB = result[0];
    const { id, name, email, photo } = getUserDB;

    const bodyOld = {
      id: id,
      nameOld: name,
      emailOld: email,
      photoOld: photo,
    };

    req.bodyOld = bodyOld;
    next();
  });
};

module.exports = {
  getUser,
};
