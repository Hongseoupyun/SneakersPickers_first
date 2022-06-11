import React from "react";
import "./AddAListing.css"

function AddAListing() {
  return (
    <body>
      <div className="body">
        <section className="login-form">
          <h1>ADD SNEAKERS TO TRADE</h1>
          <form className="newItem" action="/listings/new" method="POST">
            <div className="int-area">
              <input type="text" name="title" id="title" autocomplete="off" required />
              <label>Name</label>
            </div>

            <div className="int-area">
              <input type="text" name="description" id="description" autocomplete="off" required />
              <label>Size</label>
            </div>
            <div className="int-area">
              <input type="text" name="description" id="description" autocomplete="off" required />
              <label>Brand</label>
            </div>

            <div className="int-area" id="price-id">
              <input type="text" name="price" id="price" autocomplete="off" required />
              <label id="priceLabel">Description</label>
            </div>
            <div className="int-area">
              <input type="text" name="photo" id="photo" autocomplete="off" required />
              <label>Photo Url</label>
            </div>
            <div className="int-area">
              <input type="text" name="photo" id="photo" autocomplete="off" required />
              <label>Preference</label>
            </div>

            <div className="btn-area">
              <button type="submit" >Publish</button>
            </div>
          </form>
          <div className="caption">

          </div>

        </section>
      </div>

    </body>

  );
}

export default AddAListing;