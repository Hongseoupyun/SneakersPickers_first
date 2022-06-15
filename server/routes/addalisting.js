const router = require("express").Router();
const uploadListing = ``

module.exports =(db) =>{
  router.post("/listings",(req,res)=>{
    const result = req.body
    
    console.log("uploadedlisting",result)
    res.json({success:true, message:"Uploaded"})

    // db.query(uploadListing,[])
    // .then(()=>{
    //   res.json({success:true, message:"Profile Updated"})
    // })
    // .catch((err)=>{
    //   console.log("Error occured in addalisting=>",err)
    // })
  })
  return router;
}