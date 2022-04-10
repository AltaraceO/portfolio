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
          icon={<SiJavascript style={{ color: "#E8D44D" }} />}
          name="JavaScript"
        />
        <TechBox icon={<SiHtml5 style={{ color: "#E96227" }} />} name="HTML5" />
        <TechBox icon={<SiCss3 style={{ color: "#146EB0" }} />} name="CSS3" />
        <TechBox icon={<SiReact style={{ color: "#5ED3F3" }} />} name="React" />
        <TechBox
          icon={<FaNodeJs style={{ color: "#7CB703" }} />}
          name="NodeJs"
        />
        <TechBox
          icon={<SiExpress style={{ color: "#333333" }} />}
          name="Express"
        />
        <TechBox
          icon={<SiMongodb style={{ color: "#569034" }} />}
          name="MongoDB"
        />
        <TechBox
          icon={<SiMaterialui style={{ color: "#007DC4" }} />}
          name="MaterialUI"
        />
      </IconContext.Provider>
    </div>
  );
};
