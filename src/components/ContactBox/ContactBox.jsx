import React, { useEffect } from "react";
import "./ContactBox.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactBox = ({ animation, iconClass, name, link }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="box" data-aos={animation}>
      <div className="center">
        <a
          className="icon-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={iconClass}></i>
        </a>
      </div>
      <div className="center">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ContactBox;
