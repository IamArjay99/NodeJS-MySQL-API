const express = require("express");
const router = express.Router();

const database = require("./../database/connection");

// Create user
router.post("/create", (req, res) => {
  const { name, age, gender } = req.body;
  const sql = `INSERT INTO users (name, age, gender) VALUES ('${name}', '${age}', '${gender}')`;
  const data = { name, age, gender };
  database.query(sql, (err, result, fields) => {
    if (err) {
      res.json({
        msg: "failed",
        status: err,
      });
    } else {
      res.json({
        msg: "success",
        data,
      });
    }
  });
});

// Read all users
router.get("/read", (_, res) => {
  const sql = "SELECT * FROM users";
  database.query(sql, (err, result, fields) => {
    if (err) {
      res.json({
        msg: "failed",
      });
    } else {
      res.json({
        msg: "success",
        data: result,
      });
    }
  });
});

// Read specific user
router.get("/read/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM users WHERE id='${id}'`;
  database.query(sql, (err, result, fields) => {
    if (err) {
      res.json({
        msg: "failed",
      });
    } else {
      res.json({
        msg: "success",
        data: result,
      });
    }
  });
});

// Update user
router.put("/update", (req, res) => {
  const { id, name, age, gender } = req.body;
  const sql = `UPDATE users SET name='${name}', age='${age}', gender='${gender}' WHERE id='${id}'`;
  const data = { name, age, gender };
  database.query(sql, (err, result, fields) => {
    if (err) {
      res.json({
        msg: "failed",
        status: err,
      });
    } else {
      res.json({
        msg: "success",
        data,
      });
    }
  });
});

// Delete user
router.delete("/delete", (req, res) => {
  const { id } = req.body;
  const sql = `DELETE FROM users WHERE id='${id}'`;
  const data = { id };
  database.query(sql, (err, result, fields) => {
    if (err) {
      res.json({
        msg: "failed",
        status: err,
      });
    } else {
      res.json({
        msg: "success",
        data,
      });
    }
  });
});

module.exports = router;
