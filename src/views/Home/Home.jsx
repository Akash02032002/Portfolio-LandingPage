import React from 'react'
import './Home.css'
import img8 from '../../../src/images/home_page.png'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

function Home() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id='Home' className='home'>
      <div className="home-flex">
        <div className="left-content" data-aos = "fade-down" data-aos-delay= "2000">
          <p>Hello, My self Developer</p>
          <h1>Akash</h1>
          <h2>And I'm a  <span className="typing"></span> </h2>
          <a href="https://drive.google.com/file/d/1lqDUz0DoJdYdYj-ntrsGzW_A-Z-MidUg/view" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
        <div className="right-content" data-aos = "fade-up" data-aos-delay= "2000">
          <img src={img8} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home

