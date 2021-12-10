import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import "./LoginNew.css";

const LoginNew = () => {
  const clientId =
    "246148605747-auo8pae07jk2tmairtpprh1fdht5j7mg.apps.googleusercontent.com";
  const [showLoginButton, setshowLoginButton] = useState(true);
  const [showLogoutButton, setshowLogoutButton] = useState(false);
  const onLoginSucess = (res) => {
    console.log("Login Success:", res.profileObj);
    setshowLoginButton(false);
    setshowLogoutButton(true);
  };
  const onFailureSucess = (res) => {
    console.log("login Failed:", res);
  };
  const onSignoutSuccess = () => {
    alert("you have been signout successfully");
    setshowLoginButton(true);
    setshowLogoutButton(false);
  };
  return (
    <div>
      {showLoginButton ? (
        <GoogleLogin
          className="googleLogin"
          clientId={clientId}
          buttonText="Login"
          onSuccess={onLoginSucess}
          onFailure={onFailureSucess}
          cookiePolicy={"single_host_origin"}
        />
      ) : null}
      {showLogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
};

export default LoginNew;
