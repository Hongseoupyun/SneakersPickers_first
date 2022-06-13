const router = require('express').Router();




let queryString = `
SELECT *
FROM listings;
`;


// Route /api/listings
module.exports = db => {
  router.get("/listings", async (req, res) => {
    await db.query(queryString)
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
