// const mysql = require("mysql");

// if(process.env.JAWSDB_URL){
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// }else{
//     const connection = mysql.createConnection({
//         host: 'localhost',
//         port: 8080,
//         root: 'root',
//         password: '',
//         database:'dev_jobs_db',
//     })
// }

// connection.connect(function (err){
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threedId);
// })

// module.exports = connection;

// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL

// Dependencies
const Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize('dev_jobs_db', 'root', 'MESSIneymar10_', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

// Exports the connection for other files to use
module.exports = sequelize;
