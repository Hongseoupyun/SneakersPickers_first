import React from "react";
import "./Profile.scss";

export default function Profile() {
  return (
    <body className="profile-body">
    <section class="login-form">
      <h1 className="profile-heading">Profile</h1>
      <form action="/profile" method = "POST">
        <div className="int-area">
          <input type="text" name ="user-name" autocomplete="off" required/>
          <label>Name</label>
        </div>
        <div className="int-area">
          <input type="password" name ="email" autocomplete="off" required/>
          <label>Email</label>
        </div> 
        <div className="int-area">
          <input type="password" name ="password" autocomplete="off" required/>
          <label>Current Password</label>
        </div>
        <div className="int-area">
          <input type="password" name ="new-password" autocomplete="off" required/>
          <label>New Password </label>
        </div> 
        <div className="int-area">
          <input type="password" name ="new-password-confirm" autocomplete="off" required/>
          <label>Confirm New Password</label>
        </div> 
        <div className="btn-area">
          <button type="submit" >Save Changes</button>
        </div>
      </form>
      
  
    </section>
    
  </body>
      
  );
}
