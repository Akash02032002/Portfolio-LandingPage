import React from 'react'
import './About.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import img9 from '../../images/about_page.png'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id="About" className="about">
      <h1>About me</h1>
      <div className="about-flex" data-aos = "fade-up">       
        <div className="left-content">
        <img src={img9} alt="" />
        </div>
        <div  className="right-content">
        <h2>Developer Akash</h2>
        <p>Hello there Myself Akash, A Computer Science Engineering Student, By Profession A full Stack developer / Tezos Blockchain developer. I do have knowledge about web2 and web3 related technologies like  HTML, CSS, JavaScript, React.js, Node.js, Next.js, Express.js, Mongodb, Blockchain, Solidity, Ethereum, Bitcoin, Ether.js, Web3.js, Hardhat, Truffle, NFT, DAO, DeFi, Metaverse and many more  and Raedy to work with new web3 related Projects.

</p>
        <a href="https://www.linkedin.com/in/akashverse0/" target="_blank" rel="noopener noreferrer">Hire me</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
