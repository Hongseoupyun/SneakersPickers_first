import React from "react";


export default function MyListingItem (props) {
  const {name,description,brand,size,img} = props
  
  return (
    <section className="mylisting-container">
          <img className="mylisting-img" src={img} />
        <div className="mylisting-card-contents">
          <div className="listing-name">
            <h1>{name}</h1>
          </div>
          <div className="listing-brand">
           <span>{brand}</span> 
          </div>
          <div className="listing-size">
          <span>Size {size}</span> 
          </div>
          <div className="listing-description">
          <span>{description}</span> 
          </div>
          <div className="listing-offers">
            5 Users want to trade
          </div>
        </div>
      </section>
  )

}