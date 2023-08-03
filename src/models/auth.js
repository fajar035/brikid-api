const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../configs/db');
const { checkEmail } = require('../helpers/regex');

const register = (body) => {
  return new Promise((resolve, reject) => {
    const { email, password } = body;
    const sqlInsert = 'INSERT INTO users SET ?';
    const sqlCheckEmail = 'SELECT email FROM users WHERE email = ?';
    const createdAt = new Date(
      new Date(new Date(new Date()).toISOString()).getTime() -
        new Date().getTimezoneOffset() * 60000,
    )
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');

    if (
      !checkEmail(email) ||
      password.length === 0 ||
      typeof password === 'undefined'
    )
      return reject({
        status: 400,
        err: {
          status: 400,
          message: 'Please enter the correct email, password, and your name',
        },
      });

    const nameUser = email.replace(/@.*$/, '');

    db.query(sqlCheckEmail, [email], (err, result) => {
      if (err) return reject({ status: 500, err });
      if (result.length !== 0)
        return resolve({
          status: 406,
          result: {
            status: 406,
            message: 'Email is already registered',
          },
        });
      bcrypt
        .hash(password, 10)
        .then((hashedPassword) => {
          const bodyWithHashedPassword = {
            ...body,
            name: nameUser,
            password: hashedPassword,
            createdAt,
          };

          db.query(sqlInsert, [bodyWithHashedPassword], (err, result) => {
            if (err) return reject({ status: 500, err });
            const { insertId } = result;
            return resolve({
              status: 201,
              result: {
                status: 201,
                message: 'Registered Successfully',
                account: {
                  id: insertId,
                  name: nameUser,
                  email,
                  createdAt,
                },
              },
            });
          });
        })
        .catch((err) => reject({ status: 500, err }));
    });
  });
};

const login = (body) => {
  return new Promise((resolve, reject) => {
    const { email, password } = body;
    const sqlQuery = `SELECT * FROM users WHERE email = ?`;

    db.query(sqlQuery, [email], (err, result) => {
      if (err)
        return reject({
          status: 500,
          err: {
            status: 500,
            err,
          },
        });

      if (
        typeof email == 'undefined' ||
        typeof password == 'undefined' ||
        email == '' ||
        password == ''
      )
        return reject({
          status: 401,
          err: {
            status: 401,
            message: 'Wrong Email or Password',
          },
        });

      if (result.length == 0)
        return reject({
          status: 401,
          err: {
            status: 401,
            message: 'Wrong Email or Password',
          },
        });

      const hash = result[0].password;

      bcrypt.compare(password, hash, (err, resultCompare) => {
        if (err)
          return reject({
            status: 500,
            err: {
              status: 500,
              err,
            },
          });
        if (!resultCompare)
          return reject({
            status: 401,
            err: {
              status: 401,
              message: 'Wrong Email or Password',
            },
          });

        const payload = {
          id: result[0].id,
          email: result[0].email,
          photo: result[0].photo,
        };

        const jwtOptions = {
          expiresIn: '1d',
          issuer: process.env.ISSUER,
        };

        jwt.sign(payload, process.env.SECRET_KEY, jwtOptions, (err, token) => {
          const { photo } = result[0];
          if (err)
            return reject({
              status: 500,
              err: {
                status: 500,
                err,
              },
            });
          resolve({
            status: 200,
            result: {
              status: 200,
              token,
              photo,
            },
          });
        });
      });
    });
  });
};

const logout = (token) => {
  return new Promise((resolve, reject) => {
    const statement = [token];
    const sql = 'INSERT INTO blacklist values(null,?)';
    db.query(sql, statement, (err, result) => {
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
        result: { status: 200, message: 'Logout Success' },
      });
    });
  });
};

module.exports = { register, login, logout };
