import React from 'react'
import './Contact.css'
import ContactBox from '../../components/ContactBox/ContactBox'

function Contact() {
  return (
    <>
    <div id="Contact" className='contact'>
      <h1>Contact Me</h1>
      <div className="boxes">
        <ContactBox animation="fade-right" class= "fa-brands fa-twitter" name="Twitter" link="https://twitter.com/Akashverse_0"/>
        <ContactBox animation="fade-up" class= "fab fa-github" name="Github" link="https://github.com/Akash02032002"/>
        <ContactBox animation="fade-left" class= "fab fa-linkedin" name="Linkedin" link="https://www.linkedin.com/in/akashverse01/"/>
      </div>

    </div>
    </>
  )
}

export default Contact
