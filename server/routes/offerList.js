const router = require("express").Router();

const queryListings = `
SELECT * FROM listings 
JOIN users ON users.id=user_id 
JOIN offers ON listings.id=listing_offer_made_to_id
WHERE users.id = $1
AND
pending IS TRUE;
`;

const offeredListings = `
SELECT * FROM listings 
JOIN offers ON listings.id=listing_being_offered_id
WHERE listing_being_offered_id = $1;
`;



module.exports = (db) => {

  router.get("/offerlist", (req, res) => {
    // console.log("User id:", req.user.id)
    console.log("offerlist")
    db.query(queryListings, [req.user.id])
      .then((result) => {
        console.log("result rows:", result.rows)
        res.json(result.rows[0]);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/offerlist", (req, res) => {
    // console.log("User id:", req.user.id)
    console.log("offerlist for offered item")
    db.query(offeredListings, [req.body.offeredid])
      .then((result) => {
        console.log("result rows:", result.rows)
        res.json(result.rows[0]);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });


  return router;
};
