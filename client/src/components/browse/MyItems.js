

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Placeoffer.scss";


function MyItems(props) {

  const handleClick = () => {
    props.setOfferedID(props.id)
    console.log("select:", props.id)
  }

  console.log("thisis props id", props.id)

  return (
    <div className="others-shoes-card" >
        <div>
          <input type="image" id="css" onClick={handleClick} value={props.id} className="others-shoes-img" src={props.image_url} alt="" />
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