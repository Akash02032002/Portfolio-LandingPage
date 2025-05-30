import React from "react";
import "./About.css";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

import img9 from "../../images/about_page.png";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div id="About" className="about">
        <h1>About me</h1>
        <div className="about-flex" data-aos="fade-up">
          <div className="left-content">
            <img src={img9} alt="" />
          </div>
          <div className="right-content">
            <h2>Developer Akash</h2>
            <p>
              "Hi, I'm Akash Kumar, a seasoned full stack web developer with
              expertise in designing and developing scalable, efficient, and
              visually appealing web applications. With proficiency in both
              front-end and back-end technologies, I deliver comprehensive
              solutions that meet clients' needs. Let's build your digital
              presence together!"
            </p>
            <a
              href="https://www.linkedin.com/in/akashverse01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
