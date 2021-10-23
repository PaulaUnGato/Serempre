import React from "react";

const Specifications = ({ specifications }) => {
  const features = {
    dimension: "Dimensions",
    usb_standard: "USB Standard",
    power_suply: "Power suply",
    frequency_response_microphone: "Frequency response microphone",
    frequency_response: "Frequency response",
    noise_cancelation: "Noise cancelation",
  };

  const specsLists = Object.keys(specifications).map((item) => (
    <li key={item}>
      <div>
        <div>{features[item]}</div>
        <div>{specifications[item]}</div>
      </div>
    </li>
  ));

  return <div>{specsLists}</div>;
};

export default Specifications;
