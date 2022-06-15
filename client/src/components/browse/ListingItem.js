import React, { useState, useEffect, Button, Modal } from "react";
import "./ListingItem.scss";

export default function ListingItem(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div class="cardsale">
      <div class="photo">
        <img src={props.picture} alt="" />
      </div>
      <div class="description">
        <h2>{props.name}</h2>
        <h4>Size: {props.size}</h4>
        <h1>{props.brand}</h1>
        <h4>Description:</h4>
        <p>{props.description}</p>
        <h4>Preferences:</h4>
        <p>{props.preference}</p>
        <button onClick={handleShow}>Offer</button>
        <button>Favorite</button>
      </div>
      {/* <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog> */}
    </div>
  );
}
