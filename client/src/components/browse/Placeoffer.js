import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Placeoffer.scss";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import tradeImg from "../images/trade-sample.webp"
import MyItems from "./MyItems";

function Placeoffer() {

  //**************** */
  // const location = useLocation();



  const { id } = useParams();

  const [offeredID, setOfferedID] = useState();
  const [listing, setListing] = useState([]);
  const [myListings, setMyListings] = useState([]);


  //Gets the listing from the selected listing
  function loadListing() {
    return (axios.get(`/api/listeditem/${id}`)
      .then((result) => {
        // console.log("load listing:", result.data[0])
        setListing(result.data[0])
      })
    )
  }

  //Gets all of user's listing to offer 
  const loadMyListings = function () {
    axios.get("/api/mylistings")
      .then((result) => {
        console.log("result.data from mylistings=>", result.data)
        setMyListings(result.data)
      })
  }


  console.log("mylisting:", typeof Number(id))
  console.log(typeof offeredID)

  const myListed = myListings.map((e) => {
    return (
      <MyItems
        key={e.id}
        name={e.name}
        brand={e.brand}
        size={e.size}
        description={e.description}
        image_url={e.image_url}
        id={e.id}
        setOfferedID={setOfferedID}
      />
    )
  })


  console.log({ myListed })


  useEffect(() => {
    loadMyListings()
    loadListing()
  }, [])



  //sends axios post request using id from param, and offeredID from selected on myListed component
  const handleOffer = () => {
    return (axios.post('/api/makeoffer', { listingID: Number(id), offeredID: offeredID })
      .then((result) => {
        console.log("offered complete!")
        window.open('/browse', "_self")
      })
    )
  }



  return (
    <div className="placeoffer-body">
      {listing && myListings ? (
        <>
          <article className="placeoffers-cards">
            <div className="placeoffer-other-card">
              <div>
                <img className="placeoffer-img" src={listing.image_url} alt="" />
              </div>
              <div className="my-shoes-name">
                {listing.name}
              </div>
              <div className="my-shoes-size">
                preference: {listing.preference}
              </div>
              <div className="my-shoes-description">
                {listing.description}
              </div>
              <div className="my-shoes-size">
               {listing.brand}
              </div>
              <div className="my-shoes-size">
                Size: {listing.size}
              </div>
            </div>

            <div className="placeoffer-tradeimg">
              <button onClick={handleOffer}>Offer</button>
              <img className="tradeimg" src={tradeImg} />
              <button>Cancel</button>
            </div>

            <div className="placeoffer-mylisting">
              {myListed}
            </div>

          </article>


        </>)
        :
        (<div>No Data!</div>
        )}
    </div>
  );
}


export default Placeoffer;