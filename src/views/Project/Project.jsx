import React from "react";
import "./Project.css";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

import ProjectBox from "../../components/ProjectBox/ProjectBox";
import img1 from "../../images/movievercel.png";
import img2 from "../../images/onlinevoting.png";
import img3 from "../../images/ecommerce.png";
import img4 from "../../images/blog.png";
import img5 from "../../images/foodfoodi.png";
import img6 from "../../images/LMS.png";
import img7 from "../../images/TextUtils.png";
import img8 from "../../images/weather.png";
import img9 from "../../images/lottery.png";
import img10 from "../../images/indifav.png";
import img11 from "../../images/tezalk.png";
import img12 from "../../images/AlarmClock.png";
import img13 from "../../images/portfolio1.png";
import img14 from "../../images/FileDownloader.png";
import img15 from "../../images/TexttoSpeech.png";

function Project() {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  return (
    <div id="Project" className="project">
      <h1>My Projects</h1>
      <div data-aos="fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox
              title="Movievercel"
              img={img1}
              link="https://github.com/Akash02032002/Movievercel.git"
            />
            <ProjectBox
              title="Online-Voting-System"
              img={img2}
              link="https://github.com/Akash02032002/online-voting-system.git"
            />
            <ProjectBox
              title="Ecommerce Website"
              img={img3}
              link="https://github.com/Akash02032002/Ecommerce-client"
            />

            <ProjectBox
              title="FullStackBlog"
              img={img4}
              link="https://github.com/Akash02032002/FullStackBlog"
            />
            <ProjectBox
              title="Food-Foodi"
              img={img5}
              link="https://github.com/Akash02032002/FoodFoodi-client.git"
            />
            <ProjectBox
              title="LMS Platform"
              img={img6}
              link="https://github.com/Akash02032002/LMSclient"
            />

            <ProjectBox
              title="TextEditor using React"
              img={img7}
              link="https://github.com/Akash02032002/TextEditor"
            />
            <ProjectBox
              title="Alarm - Clock Applliciation"
              img={img12}
              link="https://github.com/Akash02032002/Alarm-Clock"
            />
            <ProjectBox
              title="File Downloader Application"
              img={img14}
              link="https://github.com/Akash02032002/File-Downloader"
            />

            <ProjectBox
              title="Weather Application"
              img={img8}
              link="https://github.com/Akash02032002/WeatherApp"
            />
            <ProjectBox
              title="Lottery betting Dapp using Tezos Blockchain"
              img={img9}
              link="https://github.com/Akash02032002/Tezos-lottery_Dapp"
            />
            <ProjectBox
              title="Indifav - India's Fasshin Hub"
              img={img10}
              link="https://github.com/Akash02032002/Indifav"
            />

            <ProjectBox
              title="TezTalk Social Media Dapp using Tezos Blockchain"
              img={img11}
              link="https://github.com/Akash02032002/Tez-Talk"
            />
            <ProjectBox
              title="Dummy - Portfolio Website"
              img={img13}
              link="https://github.com/Akash02032002/Dummy-portfolio"
            />
            <ProjectBox
              title="Text to Speech Converter"
              img={img15}
              link="https://github.com/Akash02032002/Text-to-Speech-Converter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
