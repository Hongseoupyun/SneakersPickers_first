const router = require('express').Router();

let queryString = `
INSERT INTO offers (listing_offer_made_to_id, listing_being_offered_id, complete, pending)
VALUES
  ($1, $2, FALSE, TRUE);
`;


// Route /api/listings
module.exports = db => {
  router.post("/makeoffer", (req, res) => {
    console.log(req.body)
    db.query(queryString, [req.body.listingID, req.body.offeredID])
    .then(result => {
      rows = result.rows;
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
