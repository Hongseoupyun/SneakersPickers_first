import React, { useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Placeoffer.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import tradeImg from "../images/trade-sample.webp"
import myShoesImg from "../images/mylisting-img-sample.webp"
import othersShoesImg from "../images/mylisting-img-sample.webp"

function Placeoffer() {

  const { id } = useParams();

  const [listing, setListing] = useState();
  const [myListings, setMyListings] = useState();

  function loadListing() {
    return(axios.get('/api/listeditem/' + id)
    .then((result) => {
      console.log(result.data)
      setListing(result.data)
    })
    )
  }

  const loadMyListings = function () {
    axios.get("api/mylistings")
      .then((result) => {
        console.log("result.data from mylistings=>",result.data)
        setMyListings(result.data)
      })
  }



  return (
    <body className="offers-body">
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
              name
            </div>
            <div className="my-shoes-size">
              size
            </div>
            <div className="my-shoes-description">
              description
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
              name
            </div>
            <div className="others-shoes-size">
              size
            </div>
            <div className="others-shoes-description">
              description
            </div>
          </div>
        </article>
        <div className="accpet-decline">
          <button>Offer</button>
          <button>Cancel</button>
        </div>

      </section>
    </body>

  );
}


export default Placeoffer;