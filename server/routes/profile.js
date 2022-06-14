const router = require("express").Router();

let queryString = `SELECT * FROM users WHERE id = $1`;

module.exports = (db) => {
  router.get("/profile", (req, res) => {
    db.query(queryString, [3])
      .then((result) => {
        res.json(result.rows[0]);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
