<<<<<<< HEAD
import React, { useState, useEffect} from "react";
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
>>>>>>> dbf47e8ec0354d334a56028935f5bcbad7d21aab
import "./Offers.scss"
import axios from "axios";
import MyOffers from "./MyOffers"


//Component path: Offer > MyOffers > OfferedItem
export default function Offers() {
<<<<<<< HEAD

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
      id={e.id}
      wanted_item_id={e.listing_offer_made_to_id}
      offered_item_id={e.listing_being_offered_id}
      />
     )
   })

  useEffect(() => {
    loadMyOffers()
  }, [])



  return (
    <body className="offers-body">
      <section className="offers-container">
      {showMyOffers}
=======
  const [ offers, setOffers ] = useState([]);
  
  const getOffers = function () {
    axios.get("/offers")
    .then((result) => {
      setOffers(result.data)
      console.log("this is:", result.data)
    })
    .catch((err) => {
      console.log("error!", err)
    })
  }

  useEffect(() => {
    getOffers()
  }, [])


  return (<>
  {offers.map((offer) => <body className="offers-body">
      <section className="offers-container">
        <div className="from">
          From username
        </div>
        <article className="offers-cards">
          <div className="my-shoes-card">
            <div>
              <img className="my-shoes-img" src={myShoesImg}/>
            </div>
            <div className="my-shoes-name">
              {offer.from_name}
            </div>
            <div className="my-shoes-size">
              {offer.from_size}
            </div>
            <div className="my-shoes-description">
              {offer.from_description}
            </div>
          </div>
          <div className="trade-img">
            <img src={tradeImg}/>
          </div>
          <div className="others-shoes-card">
            <div>
              <img className="others-shoes-img"src={othersShoesImg} />
            </div>
            <div className="others-shoes-name">
              {offer.to_name}
            </div>
            <div className="others-shoes-size">
              {offer.to_size}
            </div>
            <div className="others-shoes-description">
              {offer.to_description}
            </div>
          </div>
        </article>
        <div className="accept-decline">
          <button>Accept</button>
          <button>Decline</button>
        </div>

>>>>>>> dbf47e8ec0354d334a56028935f5bcbad7d21aab
      </section>
    </body>
    )}
    </>
  );
}
