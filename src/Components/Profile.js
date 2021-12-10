import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import "./ProfileStyle.css";
import Home from "./Home";
import { Typography } from "@material-ui/core";
// import Login from "./Login";
const Profile = () => {
  const { username, password } = useContext(LoginContext);

  return (
    <>
      <div className="Profile-main">
        <div className="Profile-content">
          <div>
            <Home />
          </div>
          <Typography variant="h4">Profile</Typography>
          <Typography variant="h4">Wellcome:{username}</Typography>
          <Typography variant="h4">Your Password:{password}</Typography>
        </div>
      </div>
    </>
  );
};

export default Profile;
