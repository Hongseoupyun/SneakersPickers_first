import React from "react";


export default function MyListingItem (props) {
  const {name,description,brand,size,img} = props
  
  return (
    <section className="mylisting-container">
        <div className="mylisting-img-card">
          <img className="mylisting-img" src={img} />
        </div>
        <div className="mylisting-card-contents">
          <div className="listing-name">
            {name}
          </div>
          <div className="listing-brand">
            {brand}
          </div>
          <div className="listing-size">
            Size {size}
          </div>
          <div className="listing-description">
            {description}
          </div>
          <div className="listing-offers">
            5 Users want to trade
          </div>
        </div>
      </section>
  )

}