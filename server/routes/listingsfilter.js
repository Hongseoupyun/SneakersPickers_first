const router = require('express').Router();




let queryString = `
SELECT *
FROM listings
WHERE 
active IS TRUE 
AND size = $1 
AND brand = $2;
`;


// Route /api/listings
module.exports = db => {
  router.get("/listingsfilter", (req, res) => {
    db.query(queryString, [req.body.size, req.body.brand])
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
