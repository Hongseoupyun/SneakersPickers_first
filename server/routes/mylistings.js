const router = require("express").Router();

const queryListing = `SELECT * FROM listings WHERE user_id = $1 AND active = true;`

module.exports = (db) => {
  router.get("/mylistings", (req, res) => {
    db.query(queryListing,[req.user.id])
    .then((result)=>{
      res.json({ success: true, message: "User uploaded listing" })
      res.json(result.rows)
    })
    .catch((err)=>[
      console.log("Error found in mylistings =>", err)
    ])
  })
  return router;
}