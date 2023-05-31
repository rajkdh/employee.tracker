const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"",
  database: "employeeDatabase",
  socketPath: '/var/run/mysqld/mysqld.sock'
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;