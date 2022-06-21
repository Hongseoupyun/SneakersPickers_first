import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MyListings.scss"
import MyListingItem from "./MyListingItem";



export default function MyListings() {
  const [listings, setListings] = useState([])

  //fetch data from api
  const loadMyListings = function () {
    axios.get("api/mylistingsoffers")
      .then((result) => {
        setListings(result.data)
        console.log("result.data=",result.data)
      })
      .catch((err)=>{
        console.log("Error Occured in", err)
      })
  }

  //load my listings when rendering this component
  useEffect(() => {
    loadMyListings()
  }, [])

  
  //pass the data to MyListingsitem
  const eachListing = listings.map((e) => {
    return (
      <MyListingItem
        key={e.id}
        name={e.name}
        brand={e.brand}
        size={e.size}
        img={e.image_url}
        description={e.description}
        preference={e.preference}
        total_offers={e.total_offers}
      />
      )
  })

  return (
    <div className="mylisting-body">
      {eachListing}
    </div>


  );
}
