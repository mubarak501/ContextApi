import React, { useState } from "react";
import "./App.css";
// import Home from "./Components/Home";
import Login from "./Components/Login.js";
import Profile from "./Components/Profile";
import { LoginContext } from "./Context/LoginContext.js";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <LoginContext.Provider
        value={{ username, password, setPassword, setUsername, setShowProfile }}
      >
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
