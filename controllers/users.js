const mysql = require('mysql')
const pool = require('../server')
const { handleSQLError } = require('../error')

const getAllUsers = (req, res) => {
  // SELECT ALL USERS
  pool.query("SELECT * FROM users", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

// const getUserById = (req, res) => {
//   // SELECT USERS WHERE ID = <REQ PARAMS ID>
//   let userId = req.params.id;
//   let sql = `SELECT ?? FROM ?? WHERE ?? = ?`
//   // WHAT GOES IN THE BRACKETS
//   sql = mysql.format(sql, ['*', 'users', 'id', userId])

//   pool.query(sql, (err, rows) => {
//     if (err) return handleSQLError(res, err)
//     return res.json(rows);
//   })
// }

const createUser = (req, res) => {
  // INSERT INTO USERS FIRST AND LAST NAME 
  const firstName = req.body.firstname;
  const lastName = req.body.lastname;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  let sql = "INSERT INTO ?? (??, ??, ??, ??, ??) VALUES(?, ?, ?, ?, ?)"
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, ['users', 'firstname', 'lastname', 'username', 'email', 'password', firstName, lastName, username, email, password])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

// const updateUserById = (req, res) => {
//   // UPDATE USERS AND SET FIRST AND LAST NAME WHERE ID = <REQ PARAMS ID>
//   let userId = req.params.id;
//   const firstName = req.body.first_name;
//   const lastName = req.body.last_name;
//   let sql = "UPDATE ?? SET ?? = ?, ?? = ? WHERE ?? = ?"
//   // WHAT GOES IN THE BRACKETS
//   sql = mysql.format(sql, ['users', 'first_name', firstName, 'last_name', lastName, 'id', userId])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.status(204).json();
//   })
// }

module.exports = {
  getAllUsers,
  // getUserById,
  createUser
  // updateUserById,
}