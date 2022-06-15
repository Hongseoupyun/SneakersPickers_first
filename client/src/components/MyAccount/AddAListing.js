import React from "react";
import "./AddAListing.scss";
import addSneakers from "../images/sneakers2.jpeg"
import { useState } from "react";

function AddAListing() {

  const [name, setName] = useState("")
  const [size, setSize] = useState("")
  const [brand, setBrand] = useState("")
  const [description, setDescription] = useState("")
  const [img, setImg] = useState("")
  const [preference, setPreference] = useState("")

  return (
    <body className="add-body">
      <div className="master-container">
        <div className="img-div">
          <img className="add-a-listing-img" name src={addSneakers} />
        </div>
        <form className="form">
          <h3>Uploade your shoes to trade</h3>
          <div className="int-area">
            <input
              type="text"
              name="shoes-name"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              autoComplete="off"
              required
            />
            <label>Name</label>
          </div>
          <div className="size-brand">
            <div>
              <select name="size" className="size" value={size}>
                <option>Size 4</option>
                <option>Size 5</option>
                <option>Size 6</option>
                <option>Size 7</option>
                <option>Size 8</option>
                <option>Size 9</option>
                <option>Size 10</option>
                <option>Size 11</option>
                <option>Size 12</option>
              </select>
            </div>
            <div>
              <select name="brand" className="brand" value={size}>
                <option>Air Jordan</option>
                <option>Nike Dunks</option>
                <option>Nike Air Force 1</option>
                <option>Adidas Yeezy</option>
                <option>New balances</option>
                <option>Vans/Converse</option>
                <option>Others</option>
              </select>
            </div>
          </div>
          <div className="int-area">
            <input
              type="text"
              name="description"
              value={description}
              autoComplete="off"
              required
            />
            <label>Description</label>
          </div>
          <div className="int-area">
            <input
              type="text"
              name="img-url"
              value={img}
              autoComplete="off"
              required
            />
            <label>Image Url</label>
          </div>
          <div className="int-area">
            <input
              type="text"
              name="pref"
              value={preference}
              autoComplete="off"
              required
            />
            <label>Preference(eg.Nike Dunks Varisty red etc.)</label>
          </div>
          <div className="btn-area">
            <button type="submit">Publish</button>
          </div>
        </form>
      </div>
    </body>
  );
}

export default AddAListing;
