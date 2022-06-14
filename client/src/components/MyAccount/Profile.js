import React, { useEffect, useState } from "react";
import "./Profile.scss";
import axios from "axios";
import ProfileItem from "./ProfileItem";


export default function Profile() {
  //set state of the data
  const [usersProfile, setUsersProfile] = useState({});

  //fetch data from api using axios
  const getUsersProfile = function () {
    return axios.get("/api/profile")
      .then((result) => {
        console.log(result.data);
        setUsersProfile(result.data);
      });
  };
  //load usersProfile when rendering component
  useEffect(() => {
    getUsersProfile();
  }, []);

  return (
    <div className="profile-body">
      <ProfileItem
        name={usersProfile.name}
        email={usersProfile.email}
      />
    </div>
  );
}
