import axios from "axios";
import React, { useState } from "react";
import "./Profile.scss";

export default function ProfileItem(props) {
  const { name, email } = props
  const [newName, setnewName] = useState(name && name)
  const [newEmail, setnewEmail] = useState(email && email)
  const [newPassword, setnewPassword] = useState("")
  const [confirmedPassword, setconfirmedPassword] = useState("")

  const saveChanges = function (e) {
    e.preventDefault();
    return axios.post("api/profile", { newName, newEmail, newPassword, confirmedPassword })
      .then(() => {
        console.log("updating changes")
      })
  }
  console.log("name-->", name)
  // console.log("newName==>",newName)
  return (
    <section className="login-form">
      <h1 className="profile-heading">Profile</h1>
      <form action="/api/profile" method="POST" onSubmit={saveChanges}>
        <div className="int-area">
          <input type="text" name="user-name" value={newName} onChange={(e) => { setnewName(e.target.value) }} autoComplete="off" required />
          <label>Name</label>
        </div>
        <div className="int-area">
          <input type="email" name="email" value={newEmail} onChange={(e) => { setnewEmail(e.target.value) }} autoComplete="off" required />
          <label>Email</label>
        </div>
        <div className="int-area">
          <input
            type="password"
            name="password"
            autoComplete="off"
            required
          />
          <label>Current Password</label>
        </div>
        <div className="int-area">
          <input
            type="password"
            name="new-password"
            onChange={(e) => { setnewPassword(e.target.value) }}
            autoComplete="off"
            required
          />
          <label>New Password </label>
        </div>
        <div className="int-area">
          <input
            type="password"
            name="new-password-confirm"
            onChange={(e) => { setconfirmedPassword(e.target.value) }}
            autoComplete="off"
            required
          />
          <label>Confirm New Password</label>
        </div>
        <div className="btn-area">
          <button type="submit" onClick={(e) => { saveChanges(e) }}>Save Changes</button>
        </div>
      </form>
    </section>
  );
}
