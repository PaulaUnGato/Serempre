import React from "react";

const Feautures = ({ features }) => {
  const listItems = features.map((item) => (
    <div key={item.id}>
      <h5>{item.name}</h5>
      <h5>{item.additionalValue}</h5>
    </div>
  ));
  return <div>{listItems}</div>;
};

export default Feautures;
