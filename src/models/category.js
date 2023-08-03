const db = require('../configs/db');
const mysql = require('mysql2');

const getAllCategory = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM category';

    db.query(sql, (err, result) => {
      if (err)
        return reject({
          status: 500,
          err: { status: 500, err },
        });
      if (result.length === 0)
        return resolve({
          status: 404,
          result: { status: 200, message: 'Data not found' },
        });
      return resolve({ status: 200, result: { status: 200, result } });
    });
  });
};

const createCategory = (body) => {
  return new Promise((resolve, reject) => {
    const { name } = body;
    const sql = 'INSERT INTO category VALUES(null, ?)';
    if (typeof name === 'undefined' || name.length === 0)
      return reject({
        status: 400,
        err: { status: 400, message: 'Please fill in all the fields.' },
      });

    db.query(sql, [name], (err, result) => {
      if (err)
        return reject({
          status: 500,
          err: { status: 500, err },
        });
      return resolve({ status: 201, result: { status: 201, result: body } });
    });
  });
};

const updateCategory = (body, id) => {
  return new Promise((resolve, reject) => {
    const { name } = body;
    const sqlCheckCategory = 'SELECT * FROM  category WHERE id = ?';
    const sqlUpdateCategory = 'UPDATE category SET ? WHERE id = ?';

    db.query(sqlCheckCategory, [id], (err, result) => {
      if (err)
        return reject({
          status: 500,
          err: { status: 500, err },
        });
      const category = result[0];
      const newBody = {
        name: name ? name : category.name,
      };
      db.query(sqlUpdateCategory, [newBody, id], (err, result) => {
        if (err)
          return reject({
            status: 500,
            err: { status: 500, err },
          });
        return resolve({
          status: 200,
          result: { status: 200, id, name: newBody.name },
        });
      });
    });
  });
};

const deleteCategory = (id) => {
  return new Promise((resolve, reject) => {
    const sql = 'DELETE FROM category where id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) return reject({ status: 500, err: { status: 500, err } });
      if (result.affectedRows === 0)
        return resolve({
          status: 404,
          result: { status: 404, message: 'Data not found' },
        });
      return resolve({
        status: 200,
        result: {
          status: 200,
          id,
          message: 'Successfully delete category',
        },
      });
    });
  });
};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
