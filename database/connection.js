const mysql = require("mysql");

const dbname = "nodejs_mysql";

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: dbname,
});

conn.connect((err) => {
  if (err) throw err;
  else {
    console.log("Connected to database");

    // ------------- CREATE DATABASE -------------
    /* 
    const sql = `CREATE DATABASE ${dbname}`;
    conn.query(sql, (err, result) => {
      if (err) {
        console.error("Failed to create database... " + err);
      } else {
        console.log(`${dbname} database was successfully created`);
      }
    });
    */

    // ------------- CREATE TABLE -------------
    /*
    const sql = `CREATE TABLE users (
                    id INT(255) NOT NULL PRIMARY KEY AUTO_INCREMENT,
                    name VARCHAR(100) NOT NULL,
                    age INT(11) NOT NULL,
                    gender VARCHAR(10) NOT NULL
                )`;
    conn.query(sql, (err) => {
      if (err) {
        console.error("Failed to create table users... " + err);
      } else {
        console.log("Table users successfully created");
      }
    });
    */

    // ------------- INSERT INTO -------------
    /*
    const sql =
      "INSERT INTO users (name, age, gender) VALUES ('Nodejs Mysql', 35, 'Male')";
    conn.query(sql, (err) => {
      if (err) {
        console.error("Failed to insert... " + err);
      } else {
        console.log("Successfully inserted");
      }
    });
    */

    // ------------- SELECT FROM -------------
    /*
    const sql = "SELECT  * FROM users";
    conn.query(sql, (err, result, fields) => {
      if (err) {
        console.error("Failed to fetch... " + err);
      } else {
        console.log(result);
      }
    });
    */

    // ------------- WHERE -------------
    /*
    const sql = "SELECT  * FROM users WHERE id='1'";
    conn.query(sql, (err, result, fields) => {
      if (err) {
        console.error("Failed to fetch... " + err);
      } else {
        console.log(result);
      }
    });
    */

    // ------------- ORDER BY -------------
    /*
    const sql = "SELECT  * FROM users ORDER BY name DESC"; // ASC|DESC
    conn.query(sql, (err, result, fields) => {
      if (err) {
        console.error("Failed to fetch... " + err);
      } else {
        console.log(result);
      }
    });
    */

    // ------------- DELETE -------------
    /*
    const sql = "DELETE FROM users WHERE id = '4'";
    conn.query(sql, (err, result, fields) => {
      if (err) {
        console.error("Failed to delete... " + err);
      } else {
        console.log("Successfully deleted");
      }
    });
    */

    // ------------- UPDATE -------------
    /*
    const sql = "UPDATE users SET name='RJ Diangzon' WHERE id='1'";
    conn.query(sql, (err) => {
      if (err) {
        console.error("Failed to update... " + err);
      } else {
        console.log("Successfully updated");
      }
    });
    */

    // ------------- LIMIT -------------
    /*
    const sql = "SELECT * FROM users LIMIT 2";
    conn.query(sql, (err, result) => {
      if (err) {
        console.error("Failed to fetch... " + err);
      } else {
        console.log(result);
      }
    });
    */

    // ------------- JOIN -------------
    /*
    const sql = "SELECT users.name AS name, users.age AS age FROM users
                 JOIN product
                 ON users.product_id = product.id";
    conn.query(sql, (err, result) => {
      if (err) {
        console.error("Failed to fetch... " + err);
      } else {
        console.log(result);
      }
    });
    */
  }
});

module.exports = conn;
