import React, { useState } from "react";
import ImagesHeader from "./ImageHeader";
import ImagesSelector from "./ImagesSelector";

const ImagesContainer = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0].x3);

  return (
    <>
      <ImagesHeader selectedImage={selectedImage} />
      <ImagesSelector
        images={images}
        onSelectedImage={setSelectedImage}
        selectedImage={selectedImage}
      />
    </>
  );
};

export default ImagesContainer;
