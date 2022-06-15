import React from "react";
import "./AddAListing.scss";
import addSneakers from "../images/sneakers2.jpeg"
import { useState} from "react";
import axios from "axios";

function AddAListing() {

  const [name, setName] = useState("")
  const [size, setSize] = useState("")
  const [brand, setBrand] = useState("")
  const [description, setDescription] = useState("")
  const [img, setImg] = useState("")
  const [preference, setPreference] = useState("")

  //send data to api
  const uploadListing = function (e) {
    e.preventDefault();
    axios.post("api/listings",{name, size, brand, description, img, preference})
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log("Error occured in ",err)
    })
  }


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
              <select name="size" className="size" onChange={(e)=>{setSize(e.target.value)}}>
                <option value="4">Size 4</option>
                <option value="5">Size 5</option>
                <option value="6">Size 6</option>
                <option value="7">Size 7</option>
                <option value="8">Size 8</option>
                <option value="9">Size 9</option>
                <option value="10">Size 10</option>
                <option value="11">Size 11</option>
                <option value="12">Size 12</option>
              </select>
            </div>
            <div>
              <select name="brand" className="brand" onChange={(e)=>{setBrand(e.target.value)}}>
                <option value="air jordan">Air Jordan</option>
                <option value="nike dunks">Nike Dunks</option>
                <option value="nike air force">Nike Air Force 1</option>
                <option value="adidas yeezy">Adidas Yeezy</option>
                <option value="new balnces">New balances</option>
                <option value="vans/converse">Vans/Converse</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>
          <div className="int-area">
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e)=>{setDescription(e.target.value)}}
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
              onChange={(e)=>{setImg(e.target.value)}}
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
              onChange={(e)=>{setPreference(e.target.value)}}
              autoComplete="off"
              required
            />
            <label>Preference(eg.Nike Dunks Varisty red etc.)</label>
          </div>
          <div className="btn-area">
            <button type="submit" onClick={(e)=>{uploadListing(e)}}>Publish</button>
          </div>
        </form>
      </div>
    </body>
  );
}

export default AddAListing;
