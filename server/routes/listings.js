const router = require('express').Router();

let queryString = `
SELECT *
FROM listings
WHERE active IS TRUE;
`;


// Route /api/listings
module.exports = db => {
  router.get("/listings", (req, res) => {
    console.log("TESTING")
    console.log(db)
    db.query(queryString)
    .then(result => {
      rows = result.rows;
      console.log(result)
      res.json(result.rows);
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });
  return router;
};
