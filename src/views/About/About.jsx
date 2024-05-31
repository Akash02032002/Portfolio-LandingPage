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
              Hello there, Myself Akash Kumar and I am a Computer Science and
              Engineering graduate from Loknayak Jai Prakash Institute of
              Technology which is situated in Chapra, Bihar. My cumulative cgpa
              is 8.00. I reside at village in a Nalanda District, Biharsharif. I
              am Enthusiastic And Determinant Men. I enjoy solving technical
              problem, blogging researching and learning new technologies. I
              enjoy meeting people and working with them in a team environment.
             
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
