const mysql = require("mysql2");

// create the connection to database
const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "newpatent",
});

module.exports = dbConnection;
