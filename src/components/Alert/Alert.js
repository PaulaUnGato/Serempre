import React from "react";
import "./Alert.scss";

const Alert = ({ color, children }) => {
  return (
    <label className="alert" style={{ color: color }}>
      {children}
    </label>
  );
};

export default Alert;
