import React from "react";
import logo from "./logo.png";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logoContainer">
      <img className="logo" src={logo} alt="logo"></img>
    </div>
  );
};

export default Logo;
