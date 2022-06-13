import React from "react";
import "./AddAListing.scss";

function AddAListing() {
  return (
    <body className="add-body">
      <div className="master-container">
        <div className="img-div">
          <img src="/Users/hongseoupyun/lighthouse/SneakersPickers/client/src/components/images/sneakers2.jpeg"/>
        </div>
        <form className="form">
          <h3>Uploade your shoes to trade</h3>
          <div className="int-area">
            <input
              type="text"
              name="shoes-name"
              autocomplete="off"
              required
            />
            <label>Name</label>
          </div>
          <div className="size-brand">
            <div>
              <select name="size" className="size">
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
              <select name="brand" className="brand">
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
              autocomplete="off"
              required
            />
            <label>Description</label>
          </div>
          <div className="int-area">
            <input
              type="text"
              name="img-url"
              autocomplete="off"
              required
            />
            <label>Image Url</label>
          </div>
          <div className="int-area">
            <input
              type="text"
              name="pref"
              autocomplete="off"
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
