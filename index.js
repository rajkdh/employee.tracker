const mysql = require('mysql2');
const inquirer = require("inquirer");

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employees'
  });

  connection.connect(function (err) {
    if (err) throw err;
  });
  
  