const router = require("express").Router();

const queryListing = `
SELECT offers.id, 
from_list.name as from_name, 
from_list.size as from_size, 
from_list.description as from_description, 
to_list.name as to_name, to_list.size as to_size, 
to_list.description as to_descrption FROM offers 
JOIN listings AS from_list ON offers.listing_being_offered_id = from_list.id
JOIN listings AS to_list ON offers.listing_offer_made_to_id = to_list.id
WHERE offers.id = $1
`;

module.exports = (db) => {
  router.get("/offers/:id", (req, res) => {
    db.query(queryListing,[req.params.id])
    .then((result)=>{
      res.json(result.rows[0])
    })
    .catch((err)=>[
      console.log("Error!", err)
    ])
  })
  return router;
}