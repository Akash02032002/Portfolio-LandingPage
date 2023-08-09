import React from 'react'
import './Project.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import ProjectBox from '../../components/ProjectBox/ProjectBox'
import img1 from  '../../images/TextUtils.png'
import img2 from  '../../images/weather.png'
import img3 from  '../../images/lottery.png'
import img4 from  '../../images/indifav.png'
import img5 from  '../../images/tezalk.png'
import img6 from  '../../images/AlarmClock.png'
import img7 from  '../../images/portfolio1.png'
import img8 from  '../../images/FileDownloader.png'
import img9 from  '../../images/TexttoSpeech.png'


function Project() {
  useEffect(() =>{
    Aos.init({
      duration : 500
    })
  },[])
  return (
    <div id='Project' className='project'>
      <h1>My Projects</h1>
      <div data-aos = "fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox title = "TextEditor using React" img= {img1} link = "https://github.com/Akash02032002/TextEditor"  />
            <ProjectBox title = "Alarm - Clock Applliciation" img= {img6} link = "https://github.com/Akash02032002/Alarm-Clock"  />
            <ProjectBox title = "File Downloader Application" img= {img8} link = "https://github.com/Akash02032002/File-Downloader"  />
            <ProjectBox title = "Weather Application" img= {img2} link = "https://github.com/Akash02032002/WeatherApp"  />
            <ProjectBox title = "Lottery betting Dapp using Tezos Blockchain" img= {img3} link = "https://github.com/Akash02032002/Tezos-lottery_Dapp"  />
            <ProjectBox title = "Indifav - India's Fasshin Hub" img= {img4} link = "https://github.com/Akash02032002/Indifav"  />
            <ProjectBox title = "TezTalk Social Media Dapp using Tezos Blockchain" img= {img5} link = "https://github.com/Akash02032002/Tez-Talk"  />
            <ProjectBox title = "Dummy - Portfolio Website" img= {img7} link = "https://github.com/Akash02032002/Dummy-portfolio"  />     
            <ProjectBox title = "Text to Speech Converter" img= {img9} link = "https://github.com/Akash02032002/Text-to-Speech-Converter"  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
