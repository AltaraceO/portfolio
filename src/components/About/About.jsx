import React from "react";
import { Tech } from "../Tech/Tech";
import "./about.css";

export const About = () => {
  return (
    <div className="about-card" id="About">
      <div className="about-main-container">
        <div className="about-centered">
          <div className="about-content">
            <div className="about-headers">
              <h1>Full-Stack Web Developer</h1>
              <h2>Ori Altarace</h2>
            </div>
            <div className="about-text">
              <p>
                My woodworking background and passion for building beautiful
                things lead me to fall in love with web programming. I find joy
                in planning, testing, and experimenting with new tools and
                technologies - I am currently seeking a front-end junior
                position where I can demonstrate my broad range of skills and
                creative approach to problem-solving.
              </p>
            </div>
          </div>
        </div>
        <div className="about-tech">
          <div className="centered-tech">
            <Tech />
          </div>
        </div>
      </div>
    </div>
  );
};
