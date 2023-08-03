const db = require('../configs/db');
const resHelper = require('../helpers/response');

const user = (req, res, next) => {
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

const product = (req, res, next) => {
  const { id } = req.userInfo;

  const sql =
    'SELECT products.id, category.id as categoryId ,category.name as categoryName ,products.name, products.description, products.sku, products.weight, products.height, products.width, products.length, products.image, products.price FROM brik_id.products JOIN category ON products.id_category = category.id WHERE products.id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) resHelper.fail(res, { err });

    const getProductDb = result[0];
    const {
      id,
      categoryId,
      categoryName,
      name,
      description,
      sku,
      weight,
      height,
      width,
      lenght,
      image,
      price,
    } = getProductDb;

    const bodyOld = {
      id: id,
      categoryIdOld: categoryId,
      categoryNameOld: categoryName,
      nameOld: name,
      descriptionOld: description,
      skuOld: sku,
      weightOld: weight,
      heightOld: height,
      widthOld: width,
      lenghtOld: lenght,
      imageOld: image,
      priceOld: price,
    };

    req.bodyOld = bodyOld;
    next();
  });
};

module.exports = {
  user,
  product,
};
