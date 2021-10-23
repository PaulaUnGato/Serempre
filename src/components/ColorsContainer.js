import React from "react";

const ColorsContainer = ({ colorsSection }) => {
  const listItems = colorsSection.map((item) => (
    <div key={item.id}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  ));
  return <div>{listItems}</div>;
};

export default ColorsContainer;
