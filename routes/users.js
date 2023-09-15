const express = require("express");
const router = express.Router();
const db = require("../db");

router.get('/', async (req, res) => {
  try {
    const results = await db.query(`SELECT * FROM users`);
    console.log("Query executed successfully:", results.rows);
    return res.json(results.rows);
  } catch (error) {
    console.error("Error executing query:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;