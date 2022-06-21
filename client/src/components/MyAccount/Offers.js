import React, { useState, useEffect} from "react";
import "./Offers.scss"
import axios from "axios";
import MyOffers from "./MyOffers"


//Component path: Offer > MyOffers > OfferedItem
export default function Offers() {

  const [allMyOffers, setAllMyOffers] = useState([])

  //Axios GET the user's listings that has an offer
  const loadMyOffers = function () {
    axios.get("/api/offerlist")
    .then((result) => {
      setAllMyOffers(result.data)
    })
  }



  //Pass props to Myoffers component which will do another axios call to render the offered listing
  const showMyOffers = allMyOffers.map((e) => {
    return (
      <MyOffers
      key={e.id}
      name={e.name}
      brand={e.brand}
      size={e.size}
      description={e.description}
      image_url={e.image_url}
      offerid={e.offerid}
      wanted_item_id={e.listing_offer_made_to_id}
      offered_item_id={e.listing_being_offered_id}
      />
     )
   })

  useEffect(() => {
    loadMyOffers()
  }, [])



  return (
    <div className="mylisting-body">

      {showMyOffers}

    </div>

  );
}