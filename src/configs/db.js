const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.UNAME,
  password: process.env.PASS,
  database: process.env.DB,
  port: process.env.PORT,
});

// cek koneksi
db.connect((err) => {
  if (err) return console.log(`${err}`);
  return console.log('Connected Database ..');
});

module.exports = db;
