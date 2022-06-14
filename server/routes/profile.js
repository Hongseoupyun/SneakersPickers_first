const router = require("express").Router();

let queryUser = `SELECT * FROM users WHERE id = $1`;
let updateUserProfile = ``

module.exports = (db) => {
  router.get("/profile", (req, res) => {
    console.log(req.user)
    db.query(queryUser, [3])
      .then((result) => {
        res.json(result.rows[0]);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  router.post("/profile",(req,res)=>{
    const {newName, newEmail, newPassword, confirmedPassword}= req.body
    // if(newPassword === confirmedPassword) {
      db.query(updateUserProfile,[newName, newEmail, newPassword])
    // }
  })
  return router;
};
