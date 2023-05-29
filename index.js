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
    // add code to run main page prompts when connection is made.
    mainPage();
  });

  // add main page promts for user to select task - choices.
  function mainPage(){
    inquirer.prompt({
        type: "list",
        name: "task",
        message: "What would you like to do?",
        choices: [
          "View all Employees",
          "View all Departments",
          "View all roles",
          "Add Employee",
          "Remove Employees",
          "Update Employee Role",
          "Add Role",
          "Add department",
          "Exit"]
            
    })
        
  }
  
