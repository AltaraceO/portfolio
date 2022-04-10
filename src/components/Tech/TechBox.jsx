import React, { useState, useEffect } from "react";
import "./tech-box.css";

export const TechBox = ({ icon, name }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cont = document.querySelector("#icon");

    function check([entry]) {
      if (entry.isIntersecting) {
        setVisible(true);
        console.log("in");
      } else {
        console.log("out");
        setVisible(false);
      }
    }
    const Obs = new IntersectionObserver(check, { threshold: [0.5] });

    Obs.observe(cont);
  }, []);
  return (
    <div>
      <div
        id="icon"
        className={visible ? "icon-container motion" : "icon-container"}
      >
        {icon}
        <h6 className="tech-name"> {name}</h6>
      </div>
    </div>
  );
};
