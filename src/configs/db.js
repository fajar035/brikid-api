const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.HOST_LOCAL,
  user: process.env.UNAME_LOCAL,
  password: process.env.PASS_LOCAL,
  database: process.env.DB_LOCAL,
});

// cek koneksi
db.connect((err) => {
  if (err) return console.log(`${err}`);
  return console.log('Connected Database ..');
});

module.exports = db;
