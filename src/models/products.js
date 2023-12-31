const db = require('../configs/db');
const mysql = require('mysql2');

const getAllProducts = (query) => {
  return new Promise((resolve, reject) => {
    const { search, sort, order, page, limit, category } = query;
    let sqlGetAll =
      'SELECT products.id as id, category.id as categoryId ,category.name as categoryName ,products.name as name, products.description as description, products.sku as sku, products.weight as weight, products.height as height, products.width as width, products.length as length, products.image as image, products.price as price FROM products JOIN category ON products.id_category = category.id';
    let sqlCount = `SELECT COUNT(*) as "count" from products JOIN category ON products.id_category = category.id`;
    const statement = [];
    const statementCount = [];

    if (search.length !== 2 && category.length === 2) {
      sqlGetAll += ' WHERE products.name LIKE ?';
      statement.push(mysql.raw(search));
    }

    if (search.length === 2 && category.length !== 2) {
      sqlGetAll += ' WHERE category.name LIKE ?';
      sqlCount += ` WHERE category.name = ?`;
      statement.push(mysql.raw(category));
      const categoryCount = category.replace(/%/g, '');
      statementCount.push(mysql.raw(categoryCount));
    }

    if (search.length !== 2 && category.length !== 2) {
      sqlGetAll += ` WHERE products.name LIKE ? OR category.name LIKE ?`;
      statement.push(mysql.raw(search), mysql.raw(category));
    }

    if (order && sort) {
      sqlGetAll += ' ORDER BY ? ?';
      statement.push(mysql.raw(order), mysql.raw(sort));
    }

    db.query(sqlCount, statementCount, (err, result) => {
      if (err) return reject({ status: 500, err: { status: 500, err } });

      const count = result[0].count;
      console.log('COUNT : ', result);
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
            : `/products?order=${order || 'id'}&sort=asc&page=${
                page + 1
              }&limit=${limit}`,
        prev:
          isNaN(limit) || page > totalPage
            ? null
            : page == 1 || page == 0
            ? null
            : `/products?order=${order || 'id'}&sort=asc&page=${
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

const getByIdProduct = (id) => {
  return new Promise((resolve, reject) => {
    const sql =
      'SELECT products.id as id, category.id as categoryId ,category.name as categoryName ,products.name as name, products.description as description, products.sku as sku, products.weight as weight, products.height as height, products.width as width, products.length as length, products.image as image, products.price as price FROM products JOIN category ON products.id_category = category.id WHERE products.id = ?';

    db.query(sql, id, (err, result) => {
      if (err) return reject({ status: 500, err: { status: 500, err } });

      if (result.length === 0)
        return resolve({
          status: 404,
          result: {
            status: 404,
            result,
          },
        });

      return resolve({
        status: 200,
        result: {
          status: 200,
          result: result,
        },
      });
    });
  });
};

const createProduct = (body) => {
  return new Promise((resolve, reject) => {
    let {
      name,
      description,
      sku,
      weight,
      height,
      width,
      length,
      image,
      price,
      createdAt,
      id_category,
    } = body;
    const sql =
      'INSERT INTO products VALUES(null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, null, ?)';

    const statement = [
      name,
      description,
      sku,
      weight,
      height,
      width,
      length,
      image,
      price,
      createdAt,
      id_category,
    ];

    db.query(sql, statement, (err, result) => {
      if (err) return reject({ status: 500, err: { status: 500, err } });

      return resolve({
        status: 201,
        result: { status: 201, result: { ...body, id: result.insertId } },
      });
    });
  });
};

const updateProduct = (body, id) => {
  return new Promise((resolve, reject) => {
    const {
      name,
      description,
      weight,
      height,
      width,
      length,
      image,
      price,
      category,
    } = body;

    const sqlGetProduct = `SELECT products.id as id, category.id as categoryId ,category.name as categoryName ,products.name as name, products.description as description, products.sku as sku, products.weight as weight, products.height as height, products.width as width, products.length as length, products.image as image, products.price as price FROM products JOIN category ON products.id_category = category.id WHERE products.id = ?`;
    const sqlUpdateProduct = 'UPDATE products SET ? WHERE products.id = ?';
    const updatedAt = new Date(
      new Date(new Date(new Date()).toISOString()).getTime() -
        new Date().getTimezoneOffset() * 60000,
    )
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');

    db.query(sqlGetProduct, [id], (err, result) => {
      if (err)
        return reject({
          status: 500,
          err: {
            status: 500,
            err,
          },
        });
      const product = result[0];

      const newBody = {
        name: name ? name : product.name,
        description: description ? description : product.description,
        sku: product.sku,
        weight: weight ? weight : product.weight,
        height: height ? height : product.height,
        width: width ? width : product.width,
        length: length ? length : product.length,
        image: image ? image : product.image,
        price: price ? price : product.price,
        updatedAt,
        id_category: category ? category : product.categoryId,
      };

      db.query(sqlUpdateProduct, [newBody, id], (err, result) => {
        if (err) return reject({ status: 500, err: { status: 500, err } });

        return resolve({ status: 200, result: { status: 200, newBody } });
      });
    });
  });
};

const deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    const sql = 'DELETE FROM products WHERE id = ?';

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
          message: 'Successfully delete product',
        },
      });
    });
  });
};

module.exports = {
  getAllProducts,
  getByIdProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
