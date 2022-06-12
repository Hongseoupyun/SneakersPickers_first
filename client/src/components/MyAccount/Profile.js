import React from "react";
import "./Profile.scss";

export default function Profile() {
  return (
    <body className="profile-body">
    <section class="login-form">
      <h1 className="profile-heading">Profile</h1>
      <form action="/login" method = "POST">
        <div class="int-area">
          <input type="text" name ="email" id="id" autocomplete="off" required/>
          <label>Name </label>
        </div>
        <div class="int-area">
          <input type="password" name ="pw" id="pw " autocomplete="off" required/>
          <label>Email</label>
        </div> 
        <div class="btn-area">
          <button type="submit" >Edit</button>
        </div>
        <div class="int-area">
          <input type="password" name ="email" id="id" autocomplete="off" required/>
          <label>Current Password</label>
        </div>
        <div class="int-area">
          <input type="password" name ="pw" id="pw " autocomplete="off" required/>
          <label>New Password </label>
        </div> 
        <div class="int-area">
          <input type="password" name ="pw" id="pw " autocomplete="off" required/>
          <label>Confirm New Password</label>
        </div> 
        <div class="btn-area">
          <button type="submit" >Reset Password</button>
        </div>
      </form>
      
  
    </section>
    
  </body>
      
  );
}
