import React from "react";

import "./Images.scss";

const ImageHeader = ({ selectedImage }) => {
  return (
    <div className="imageContainer">
      <img className="imageHeader" src={selectedImage} alt="header"></img>
    </div>
  );
};

export default ImageHeader;
