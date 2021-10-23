import React from "react";
import "./Details.scss";

const DetailsBody = ({ selectedTab }) => {
  return <p className="detailDescription">{selectedTab}</p>;
};

export default DetailsBody;
