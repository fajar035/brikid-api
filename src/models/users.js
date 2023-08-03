const db = require('../configs/db');
const mysql = require('mysql2');

const getAllUsers = (query) => {
  return new Promise((resolve, reject) => {
    const { search, sort, order, page, limit } = query;
    let sqlGetAll =
      'SELECT id, name, email, photo, createdAt, updatedAt FROM users';
    const sqlCount = `SELECT COUNT(*) as "count" from users`;
    const statement = [];

    if (search.length !== 2) {
      sqlGetAll += ' WHERE name LIKE ?';
      statement.push(mysql.raw(search));
    }

    if (order && sort) {
      sqlGetAll += ' ORDER BY ? ?';
      statement.push(mysql.raw(order), mysql.raw(sort));
    }

    db.query(sqlCount, (err, result) => {
      if (err) return reject({ status: 500, err: { status: 500, err } });

      const count = result[0].count;
      const totalPage = Math.ceil(count / limit);

      if (page && limit) {
        sqlGetAll += ' LIMIT ? OFFSET ?';
        const offset = (page - 1) * limit;
        statement.push(limit, offset);
      }

      const meta = {
        next:
          isNaN(page) || page > totalPage
            ? null
            : page == Math.ceil(count / limit)
            ? null
            : `/users?order=${order || 'id'}&sort=asc&page=${
                page + 1
              }&limit=${limit}`,
        prev:
          isNaN(limit) || page > totalPage
            ? null
            : page == 1 || page == 0
            ? null
            : `/users?order=${order || 'id'}&sort=asc&page=${
                page - 1
              }&limit=${limit}`,
        totalPage,
        count,
      };

      db.query(sqlGetAll, statement, (err, result) => {
        if (err)
          return reject({
            status: 500,
            err: {
              status: 500,
              err,
            },
          });

        return resolve({
          status: 200,
          result: {
            status: 200,
            result,
            meta,
          },
        });
      });
    });
  });
};

const getByIdUser = (id) => {
  return new Promise((resolve, reject) => {
    const sql =
      'SELECT id, name, email, photo, createdAt, updatedAt FROM users WHERE id = ?';

    db.query(sql, id, (err, result) => {
      if (err) return reject({ status: 500, err: { status: 500, err } });

      return resolve({
        status: 200,
        result: {
          status: 200,
          result: result.length !== 0 ? result[0] : result,
        },
      });
    });
  });
};

const updateUser = (body, bodyOld, userInfo) => {
  return new Promise((resolve, reject) => {
    const { id } = userInfo;
    let { name, email, photoUser } = body;

    const { nameOld, emailOld, photoOld } = bodyOld;
    const updatedAt = new Date(
      new Date(new Date(new Date()).toISOString()).getTime() -
        new Date().getTimezoneOffset() * 60000,
    )
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');

    const sql = 'UPDATE users SET ? WHERE id = ?';
    const sqlCheckEmail = 'SELECT email FROM users WHERE email = ?';

    const newBody = {
      name: name ? name : nameOld,
      email: email ? email : emailOld,
      photo: photoUser ? photoUser : photoOld,
      updatedAt,
    };
    db.query(sqlCheckEmail, [email], (err, result) => {
      if (err) return reject({ status: 500, err: { status: 500, err } });
      if (result.length !== 0)
        return resolve({
          status: 406,
          result: { status: 406, message: 'Email is already registered' },
        });

      db.query(sql, [newBody, id], (err, result) => {
        if (err) return reject({ status: 500, err: { status: 500, err } });
        if (result.affectedRows === 0)
          return resolve({ status: 404, result: { status: 400, result } });
        return resolve({
          status: 200,
          result: {
            status: 200,
            message: 'Successfuly changed data',
            result: {
              id,
              name: name ? name : nameOld,
              email: email ? email : emailOld,
              photo: photoUser ? photoUser : photoOld,
            },
          },
        });
      });
    });
  });
};

module.exports = { getAllUsers, getByIdUser, updateUser };
