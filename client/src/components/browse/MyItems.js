

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Placeoffer.scss";


function MyItems(props) {

  const handleClick = () => {
    props.setOfferedID(props.id)
  }

  console.log("thisis props id", props.id)

  return (

      <div className="placeoffer-mylisting-item" >
        <input type="radio" id="css" name="itemfromuser" onClick={handleClick} value={props.id}></input>
        <div>
          <img className="my-listing-img" src={props.image_url} alt="" />
        </div>
        <div>
        <div className="others-shoes-name">
          Name: {props.name}
        </div>
        <div className="others-shoes-description">
          Description: {props.description}
        </div>
        <div className="others-shoes-size">
          {props.brand}
        </div>
        <div className="others-shoes-size">
          Size: {props.size}
        </div>
        </div>
      </div>
    
  )
}


export default MyItems;