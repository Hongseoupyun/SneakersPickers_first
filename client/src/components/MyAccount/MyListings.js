import axios from "axios";
import React, {useEffect,useState } from "react";
import "./MyListings.scss"
import MyListingItem from "./MyListingItem";
import MyListingsAddCard from "./MyListingsAddCard";


export default function MyListings() {
  const [myListings,setmyListings] = useState("")

  //fetch data from api
  const loadMyListings = function () {
    axios.get("api/mylistings")
      .then((result) => {
        console.log(result.data)
        setmyListings(result.data)
      })
  }

  //load my listings when rendering this component
  useEffect(() => {
    loadMyListings()
  }, [])

  //pass the data to MyListingsitem
  const listings = myListings.map((e) => {
    <MyListingItem
      name={e.name}
      brand={e.brand}
      size={e.size}
      description={e.description}
    />
  })

  return (
    <div className="mylisting-body">
      {listings}
      {MyListingsAddCard}
    </div>


  );
}
