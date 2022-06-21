<<<<<<< HEAD
const router = require('express').Router();

let queryString = `
INSERT INTO offers (listing_offer_made_to_id, listing_being_offered_id, complete, pending)
VALUES
  ($1, $2, FALSE, TRUE);
`;


// Route /api/listings
module.exports = db => {
  router.post("/makeoffer", (req, res) => {
    console.log("bodyrequest offer:", req.body)
    db.query(queryString, [req.body.listingID, req.body.offeredID])
    .then(result => {
      console.log("result makeoffer:", "test")

      res.json({"Offering id:": 3});
    })
    .catch(err => {
      console.log("error in make offer:", err)
      res
      .status(500)
      .json({ error: err.message });
    });
  });
  return router;
};
=======
const router = require('express').Router();

let queryString = `
INSERT INTO offers (listing_offer_made_to_id, listing_being_offered_id, complete, pending)
VALUES
  ($1, $2, FALSE, TRUE);
`;


// Route /api/listings
module.exports = db => {
  router.post("/makeoffer", (req, res) => {
    console.log("bodyrequest offer:", req.body)
    db.query(queryString, [req.body.listingID, req.body.offeredID])
    .then(result => {
      console.log("result makeoffer:", result)
      rows = result.rows;
      res.json({"Offering id:": offeredID});
    })
    .catch(err => {
      console.log("error in make offer:", err)
      res
      .status(500)
      .json({ error: err.message });
    });
  });
  return router;
};
>>>>>>> d1a3ee043aa8280eb2d0fc6306e82a36ef542e07
