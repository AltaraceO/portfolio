import React from "react";
import { TechBox } from "./TechBox";
import "./tech.css";

import { IconContext } from "react-icons";
import { FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMongodb,
  SiReact,
  SiMaterialui,
} from "react-icons/si";

export const Tech = () => {
  return (
    <div className="tech-container">
      <IconContext.Provider value={{ size: "2rem" }}>
        <TechBox
          icon={<SiJavascript style={{ color: "red" }} />}
          name="JavaScript"
        />
        <TechBox icon={<SiHtml5 style={{ color: "blue" }} />} name="HTML5" />
        <TechBox icon={<SiCss3 style={{ color: "purple" }} />} name="CSS3" />
        <TechBox icon={<SiReact style={{ color: "purple" }} />} name="React" />
        <TechBox
          icon={<FaNodeJs style={{ color: "purple" }} />}
          name="NodeJs"
        />
        <TechBox
          icon={<SiExpress style={{ color: "purple" }} />}
          name="Express"
        />
        <TechBox
          icon={<SiMongodb style={{ color: "purple" }} />}
          name="MongoDB"
        />
        <TechBox
          icon={<SiMaterialui style={{ color: "purple" }} />}
          name="MaterialUI"
        />
      </IconContext.Provider>
    </div>
  );
};
