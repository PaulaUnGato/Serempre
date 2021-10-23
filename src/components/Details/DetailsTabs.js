import React from "react";
import "./Details.scss";

const DetailsTabs = ({ details, onSelectedTab, selectedTab }) => {
  const listItems = details.map((item) => (
    <li
      key={item.id}
      className={`tab ${item.description === selectedTab ? "tabSelected" : ""}`}
      onClick={() => onSelectedTab(item.description)}
    >
      {item.name}
    </li>
  ));

  return <ul className="selectorTabs">{listItems}</ul>;
};

export default DetailsTabs;
