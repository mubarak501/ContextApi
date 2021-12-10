import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import LoginNew from "./LoginNew";
import { useState } from "react";

import { AiFillEye } from "react-icons/ai";
import "./LoginStyle.css";
const Login = () => {
  const { setUsername, setShowProfile } = useContext(LoginContext);
  const { setPassword } = useContext(LoginContext);
  // const myFunction = () => {
  //   var x = document.getElementById("myInput");
  //   if (x.type === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  console.log(setShowProfile);
  return (
    <div className="login-main">
      <div className="login-content">
        <div className="login-credentials">
          <Input
            className="input01"
            type="text"
            placeholder="Username..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <Input
            className="input02"
            type={passwordShown ? "text" : "password"}
            placeholder="Password..."
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <AiFillEye className="Airfill" onClick={togglePasswordVisiblity} />
        </div>
        <Button
          id="LoginBtn"
          onClick={() => {
            setShowProfile(true);
          }}
        >
          Login
        </Button>
        <h4 className="signWithGoogle">Sign-in with Google</h4>
        <LoginNew />
      </div>
    </div>
  );
};

export default Login;
