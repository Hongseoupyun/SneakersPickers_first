const router = require("express").Router();

const queryListing = `SELECT * FROM listings WHERE user_id = $1 AND active = true;`

// selects all necessary info from listings as well as the total count of offers each listing has
const queryListing2 = `
SELECT listings.id, name, brand, size, image_url, description, listings, COUNT(offers.listing_offer_made_to_id) AS total_offers 
FROM offers 
JOIN listings ON offers.listing_offer_made_to_id=listings.id
WHERE user_id = $1 AND active = true
GROUP BY listings.id, name, brand, size, image_url, description;`

const offersQuery = `SELECT COUNT(*) FROM listings GROUP BY listing_offer_made_to_id HAVING listing_offer_made_to_id = $1`

module.exports = (db) => {
  router.get("/mylistings", (req, res) => {
    db.query(queryListing2,[req.user.id])
    .then((result)=>{
      res.json(result.rows)
      console.log(result.rows)
    })
    .catch((err)=>[
      console.log("Error found in mylistings =>", err)
    ])
  })
  return router;
}