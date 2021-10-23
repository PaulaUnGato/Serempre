import React from "react";

const WarrantyContainer = ({ warrantyList }) => {
  const listItems = warrantyList.map((item) => (
    <div key={item.id}>
      <h5>{item.name}</h5>
      <p>{item.description}</p>
      <h5>{item.additionalValue}</h5>
    </div>
  ));
  return <div>{listItems}</div>;
};

export default WarrantyContainer;
