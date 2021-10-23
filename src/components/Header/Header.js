import React from "react";
import Alert from "../Alert/Alert";
import Title from "./Title";
import Description from "./Description";
import "./Header.scss";

const Header = ({ title, description }) => (
  <div className="header">
    <Alert color="#CB253C">NEW RELEASE</Alert>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </div>
);

export default Header;
