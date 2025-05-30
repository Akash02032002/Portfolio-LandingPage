import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import ContactBox from "../../components/ContactBox/ContactBox";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5h3hi7y", "template_jxr1ci3", form.current, {
        publicKey: "r19DHX-qeXPPtu7q4",
      })
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
          });
          form.current.reset(); // clear form fields
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send message. Try again!", {
            position: "top-center",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <div id="Contact" className="contact">
      <ToastContainer />

      <h1>Contact Me</h1>

      <div className="contact-sections">
        <div className="boxes">
          <ContactBox
            animation="fade-right"
            iconClass="fa-brands fa-twitter"
            name="Twitter"
            link="https://twitter.com/Akashverse_0"
          />
          <ContactBox
            animation="fade-up"
            iconClass="fab fa-github"
            name="Github"
            link="https://github.com/Akash02032002"
          />
          <ContactBox
            animation="fade-left"
            iconClass="fab fa-linkedin"
            name="Linkedin"
            link="https://www.linkedin.com/in/akashverse01/"
          />
        </div>

        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="from_name" required />
            <label>Email</label>
            <input type="email" name="from_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
