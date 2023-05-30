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
            
    }).then(function ({ task }){
        switch (task) {
            case "View Employees":
              viewEmployee();
              break;
        }
    })
        
  }
  
  function viewEmployee() {
    console.log("Viewing employees\n");
  
    var query =
      `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM employee e
    LEFT JOIN role r
      ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    LEFT JOIN employee m
      ON m.id = e.manager_id`
  
    connection.query(query, function (err, res) {
      if (err) throw err;
  
      console.table(res);
      console.log("Employees viewed!\n");
  
      mainPage();
    });
    // console.log(query.sql);
  }
//   mainPage();