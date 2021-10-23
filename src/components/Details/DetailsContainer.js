import React, { useState } from "react";
import DetailsTabs from "./DetailsTabs";
import DetailsBody from "./DetailsBody";

const DetailsContainer = ({ details }) => {
  const [selectedTab, setSelectedTab] = useState(details[0].description);
  return (
    <>
      <DetailsTabs
        details={details}
        onSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
      />
      <DetailsBody selectedTab={selectedTab} />
    </>
  );
};

export default DetailsContainer;
