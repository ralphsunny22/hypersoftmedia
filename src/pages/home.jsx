import React, { useEffect, useRef } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';

import Typed from "typed.js";

import Header from "../components/header";
import Footer from "../components/footer";
import Blogs from "./blogs";
import ProgressBar from "../components/progressBar";
import Contact from "../components/contact";



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
    <section name="services" className="services section-padding bg-gray" data-scroll-index="2">
        <div className="container">
            <div className="row">
                
                <div className="section-head text-center col-sm-12">
                    <h4>My Works</h4>
                    <h6>Latest Projects</h6>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="item ">
                        {/* <span className="icon"><i className="icon-laptop"></i></span> */}
                        <div className="inner_item" style={inner_item}>
                            <img className="rounded" style={imgStyle} src="./assets/img/work/work1.png" alt="" />
                        </div>
                        <div className="mt-10">
                            <h6>Funnel</h6>
                            <p>Ebook generation and management. A web-app for generating ebooks in PDF format.
                                The application comes handy with 5 different ways of doing so.
                            </p>
                        </div>
                        
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="item ">
                        {/* <span className="icon"><i className="icon-laptop"></i></span> */}
                        <div className="inner_item" style={inner_item}>
                            <img className="rounded" style={imgStyle} src="./assets/img/work/work3.png" alt="" />
                        </div>
                        <div className="mt-10">
                            <h6>Gwammu</h6>
                            <p>Buy Smarter, Sell Faster! Classified Ads for Free.  Post free classified advertising to attract buyers.
                              Individuals who are real. Ads can be found quickly. Anything can be bought and sold.
                              Registration is simple. Look for something in your area.
                            </p>
                        </div>
                        
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="item ">
                        {/* <span className="icon"><i className="icon-laptop"></i></span> */}
                        <div className="inner_item" style={inner_item}>
                            <img className="rounded" style={imgStyle} src="./assets/img/work/work4.png" alt="" />
                        </div>
                        <div className="mt-10">
                            <h6>eClat</h6>
                            <p>Health Solutions for everyone. AI-powered, Patient-inspired · Electronic Medical Records · Health Insurance Management · Smarthealth · ePharmacy 
                            </p>
                        </div>
                        
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="item ">
                        {/* <span className="icon"><i className="icon-laptop"></i></span> */}
                        <div className="inner_item" style={inner_item}>
                            <img className="rounded" style={imgStyle} src="./assets/img/work/work5.png" alt="" />
                        </div>
                        <div className="mt-10">
                            <h6>ShopNig</h6>
                            <p>
                                Online store where you can purchase all your electronics, as well as books, home appliances, kiddies items, fashion items for men, women, and children; cool gadgets, computers, groceries, automobile parts, and more on the go.
                                What more? You can have them delivered directly to you. Shop online with great ease as you 
                            </p>
                        </div>
                        
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6">
                    <div className="item ">
                        {/* <span className="icon"><i className="icon-laptop"></i></span> */}
                        <div className="inner_item" style={inner_item}>
                            <img className="rounded" style={imgStyle} src="./assets/img/work/work6.png" alt="" />
                        </div>
                        <div className="mt-10">
                            <h6>Lightgates</h6>
                            <p>
                                A multi-school educational application that seeks to produce ICT outcomes that accelerate learning and school activities;
                                bringing ICT results that enable them to flourish quickly and profitably while also increasing student development,
                                ensuring a committed and workable relationship with all schools.
                            </p>
                        </div>
                        
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="item ">
                        <div className="inner_item" style={inner_item}>
                            <img className="rounded" style={imgStyle} src="./assets/img/work/work7.png" alt="" />
                        </div>
                        <div className="mt-10">
                            <h6>GUO Applications</h6>
                            <p>
                                Access Books, Newspapers/Magazines & exam materials anytime, anywhere.
                                Read & Listen to Success
                            </p>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
        <div className="se-tring se-tring-rev">
            <span className="left"></span>
            <span className="right"></span>
        </div>
    </section>

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
