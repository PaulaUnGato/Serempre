import React from "react";
import "./Images.scss";

const ImagesSelector = ({ images, onSelectedImage, selectedImage }) => {
  const listItems = images.map((item) => (
    <div
      className={`selector ${
        selectedImage === item.x3 ? "imageSelected" : "imageNotSelected"
      }`}
      key={item.id}
      onClick={() => onSelectedImage(item.x3)}
    >
      <img className="imageSelector" alt="product" src={item.x1}></img>
    </div>
  ));
  return <div className="containerSelector">{listItems}</div>;
};

export default ImagesSelector;
