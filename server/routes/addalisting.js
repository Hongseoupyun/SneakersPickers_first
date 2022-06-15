const router = require("express").Router();
const uploadListing = ``

module.exports =(db) =>{
  router.post("listings",(req,res)=>{
    db.query(uploadListing,[])
    .then(()=>{
      res.json({success:true, message:"Profile Updated"})
    })
    .catch((err)=>{
      console.log("Error occured in addalisting=>",err)
    })
  })
}