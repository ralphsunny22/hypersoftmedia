import React, { useEffect, useRef } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';

import Typed from "typed.js";

import Header from "../components/header";
import Footer from "../components/footer";
import Blogs from "./blogs";
import ProgressBar from "../components/progressBar";
import Contact from "../components/contact";
import Works from "../components/works";



const Home = ({posts}) => {

	const imgStyle = {
        width:'30%',
        height:'100%',
        objectFit:'cover'
    }

    const inner_item = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
    }
    


    // Create Ref element.
  const el = useRef(null);
  const aboutSection = useRef(null);

  const gotoAbout = () => {
      window.scrollTo({
          top: aboutSection.current.offsetTop,
          behavior: 'smooth'
      })
  }

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I Am", "Ugo Sunday Raphael", "Software Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: ""
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <>
      <Header homepage="homepage" onGotoAbout={gotoAbout} />

      <header className="header valign bg-img">

        <div className="svg">
            <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon>
            </svg>
        </div>

        <div className="container">
            <div className="row">
                <div className="full-width text-center caption mt-30">
                    <h1 className="cd-headline clip">
                    <span className="cd-words-wrapper" ref={el}></span>
                        {/* <span>I Am </span> 
                        <span className="cd-words-wrapper">
                            <b className="is-visible">Alex Smith</b>
                            <b>UI / UX Designer</b>
                            <b>Web Developer</b>
                        </span> */}
                    </h1>
                </div>
            </div>
        </div>

        <div onClick={gotoAbout} className="arrow bounce" data-scroll-nav="1">
            <img src="./assets/img/down-chevron.svg" alt="" />
        </div>

    </header>

    {/* Hero */}
    <section ref={aboutSection} name="about" className="hero section-padding" data-scroll-index="1">
        <div className="container">
            <div className="row">
                
                <div className="col-lg-5">
                    <div className="author-img">
                        <img src="./assets/img/profile.jpg" alt="" />
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="content">
                        <h4>I'm Raphael</h4>
                        <span>Fullstack Developer</span>
                        <p>An enthusiastic software developer with <b>5+</b> years of experience, participating in the complete product development
                            lifecycle of successfully launched applications. Eager to join a credible organization, to deliver mission-critical
                            technology and business solutions to companies and some of the most recognized brands in the globe.</p>
                        <p>In previous roles, I’ve aimed at reducing downtime by improving coding efficiency, through logic</p>

                        <div className="skills mt-50">
                            
                        <ProgressBar skill="Laravel framework" bgcolor="black" progress="90" />
                        <ProgressBar skill="HTML/CSS" bgcolor="black" progress="90" />
                        <ProgressBar skill="JQUERY" bgcolor="black" progress="85" />
                        <ProgressBar skill="REACT JS" bgcolor="black" progress="85" />

                            {/* <div className="skill-item">
                                <h6>REACT JS <span>70%</span></h6>
                                <div className="skills-progress"><span data-value="70%"></span></div>
                            </div> */}

                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="se-tring se-tring-gray">
            <span className="left"></span>
            <span className="right"></span>
        </div>
    </section>

    {/* services */}
    <Works />

    {/* portfolio */}
    

    {/* Blog */}
    {/* <Blogs /> */}

    {/* contact */}
    <Contact />



      <Footer />
    </>
  );
};

export default Home;
