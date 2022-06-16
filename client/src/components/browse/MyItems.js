

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Placeoffer.scss";


function MyItems(props) {

  const handleClick = () => {
    props.setOfferedID(props.id)
  }

  return (
    <div className="others-shoes-card" >
      <input type="radio" id="css" name="itemfromuser" onClick={handleClick} value={props.id}></input>
        <div>
          <img className="others-shoes-img"src={props.image_url} alt="" />
        </div>
        <div className="others-shoes-name">
          Name: {props.name}
        </div>
        <div className="others-shoes-size">
          Size: {props.size}
        </div>
        <div className="others-shoes-description">
          Description: {props.description}
        </div>
    </div>
  )
}


export default MyItems;