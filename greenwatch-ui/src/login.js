import React from "react";
import "./login.css";
import logo from "./images/logo.png";

function LoginPage() {
  return (
    <div className="container">
      <header>
        <button className="about-button">About</button>
      </header>
      <h1><span>Green</span>watch</h1>
      <div className="login-box">
        <img src={logo} alt="No Image"></img>
        <form>
          <div className="input-container">
            <label htmlFor="username">Username or Email </label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password </label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
