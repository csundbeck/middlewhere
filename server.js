var mysql = require('mysql');
var express = require('express');
require('dotenv').config();

const db = mysql.createConnection({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'middlewhere'
})

db.connect(err => {
  if(err) {
    throw err;
  }
  console.log("MySQL Connected!");
})

const app = express();

app.get('/createUser', (req, res) => {
  const firstName = req.body.firstname;
  const lastName = req.body.lastname;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  let sql = "INSERT INTO ?? (??, ??, ??, ??, ??) VALUES(?, ?, ?, ?, ?)";
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, ['users', 'firstname', 'lastname', 'username', 'email', 'password', firstName, lastName, username, email, password]);
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send('1 user created...');
  });
})

app.listen('3000', () => {
  console.log('Server istening on port 3000')
})

// class Connection {
//   constructor() {
//     if (!this.pool) {
//       console.log('creating connection...')
//       this.pool = mysql.createPool({
//         connectionLimit: 100,
//         host: process.env.DB_HOST,
//         port: 3306,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASS,
//         database: 'admin'
//       })
//       console.log('connected');
//       return this.pool
//     }
//     return this.pool
    
//   }
// }

// const instance = new Connection()

// module.exports = instance;

// var con = mysql.createConnection({
//   host: "34.66.18.225",
//   user: "root",
//   password: "middl3Wh3r3"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });