import React from "react";
import "./tech-box.css";

export const TechBox = ({ icon, name }) => {
  return (
    <div>
      <div className="icon-container">
        {icon}
        <h6 className="tech-name"> {name}</h6>
      </div>
    </div>
  );
};
