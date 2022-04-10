import React, { useEffect, useRef } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Typed from "typed.js";

import Header from "../components/header";
import Footer from "../components/footer";


const Home = () => {

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
      <Header homepage="true" onGotoAbout={gotoAbout} />

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
                        <img src="./assets/img/hero.jpg" alt="" />
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="content">
                        <h4>I'm Alex Smith</h4>
                        <span>UI / UX Designer & Front-end Developer</span>
                        <p>Lorem Ipsum <b>From USA</b> is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the standard dummy text ever since.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <div className="skills mt-50">
                            <div className="skill-item">
                                <h6>Web Design <span>90%</span></h6>
                                <div className="skills-progress"><span data-value="90%"></span></div>
                            </div>
                            <div className="skill-item">
                                <h6>Branding <span>80%</span></h6>
                                <div className="skills-progress"><span data-value="80%"></span></div>
                            </div>
                            <div className="skill-item">
                                <h6>Development <span>85%</span></h6>
                                <div className="skills-progress"><span data-value="85%"></span></div>
                            </div>
                            <div className="skill-item">
                                <h6>Marketing <span>70%</span></h6>
                                <div className="skills-progress"><span data-value="70%"></span></div>
                            </div>
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
                    <div className="item">
                        <span className="icon"><i className="icon-laptop"></i></span>
                        <h6>Developments</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="item">
                        <span className="icon"><i className="icon-briefcase"></i></span>
                        <h6>Web Design</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="item">
                        <span className="icon"><i className="icon-circle-compass"></i></span>
                        <h6>Branding</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="item">
                        <span className="icon"><i className="icon-layers"></i></span>
                        <h6>Easy Installation</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="item">
                        <span className="icon"><i className="icon-mobile"></i></span>
                        <h6>Fully Responsive</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="item">
                        <span className="icon"><i className="icon-megaphone"></i></span>
                        <h6>Trusted Support</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
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
    <section name="blog" className="blog section-padding bg-gray" data-scroll-index="4">
        <div className="container">
            <div className="row">

                <div className="section-head text-center col-sm-12">
                    <h4>Our Blog</h4>
                    <h6>Latest News</h6>
                </div>

                 

                {/* <!-- Posts --> */}
                <OwlCarousel loop={true} items={3} margin={30} autoplay ={true} >
                    {/* loop:true,
                    margin: 30,
                    mouseDrag:false,
                    autoplay:true,
                    smartSpeed:500,
                    responsiveClass:true, */}
                    <div className="item mb-30">
                        <div className="post-img">
                            <img src="./assets/img/blog/1.jpg" alt="" />
                        </div>
                        <div className="content">
                            <span><a href="#0">August 06 , 2017</a></span>
                            <span>/</span>
                            <span><a href="#0">
                                <em>WordPress</em>
                            </a></span>
                            <h5><a href="#0">48 Best WordPress Themes</a></h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the dummy text ever</p>
                            <a href="#0" className="more">Continue Reading<i className="fas fa-angle-right"></i></a>
                        </div>
                    </div>

                    <div className="item">
                        <div className="post-img">
                            <img src="./assets/img/blog/2.jpg" alt="" />
                        </div>
                        <div className="content">
                            <span><a href="#0">August 06 , 2017</a></span>
                            <span>/</span>
                            <span><a href="#0">
                                <em>WordPress</em>
                            </a></span>
                            <h5><a href="#0">Managing Their Own Websites</a></h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the dummy text ever</p>
                            <a href="#0" className="more">Continue Reading<i className="fas fa-angle-right"></i></a>
                        </div>
                    </div>

                    <div className="item">
                        <div className="post-img">
                            <img src="./assets/img/blog/3.jpg" alt="" />
                        </div>
                        <div className="content">
                            <span><a href="#0">August 06 , 2017</a></span>
                            <span>/</span>
                            <span><a href="#0">
                                <em>WordPress</em>
                            </a></span>
                            <h5><a href="#0">Master These Awesome Skills</a></h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the dummy text ever</p>
                            <a href="#0" className="more">Continue Reading<i className="fas fa-angle-right"></i></a>
                        </div>
                    </div>

                    <div className="item">
                        <div className="post-img">
                            <img src="./assets/img/blog/2.jpg" alt="" />
                        </div>
                        <div className="content">
                            <span><a href="#0">August 06 , 2017</a></span>
                            <span>/</span>
                            <span><a href="#0">
                                <em>WordPress</em>
                            </a></span>
                            <h5><a href="#0">Managing Their Own Websites</a></h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the dummy text ever</p>
                            <a href="#0" className="more">Continue Reading<i className="fas fa-angle-right"></i></a>
                        </div>
                    </div>

                </OwlCarousel>

            </div>
        </div>
        <div className="se-tring se-tring-rev">
            <span className="left"></span>
            <span className="right"></span>
        </div>
    </section>

    {/* contact */}
    <section name="contact" className="contact section-padding" data-scroll-index="5">
        <div className="container">
            <div className="row">

                <div className="section-head text-center col-sm-12">
                    <h4>Contact Us</h4>
                    <h6>Get In Touch</h6>
                </div>
                
                {/* <!-- Contact Form --> */}
                <div className="col-md-12">
                    <form className="form" id="contact-form" method="post" action="http://www.innovationplans.com/idesign/kewll/contact.php">

                        <div className="messages"></div>

                        <div className="controls">

                            <div className="row">

                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input id="form_name" type="text" name="name" placeholder="Name *" required="required" data-error="Firstname is required." />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input id="form_email" type="email" name="email" placeholder="Email *" required="required" data-error="Valid email is required." />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input id="form_subject" type="text" name="subject" placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea id="form_message" name="message" placeholder="Your Message *" rows="4" required="required" data-error="Your message is required."></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <button type="submit" className="butn butn-bg"><span>Send Message</span></button>
                                    <div className="info">
                                        <span><strong>Email</strong> : Support@Website.com</span>
                                        <span><strong>Phone</strong> : +20 010 2517 8918</span>
                                    </div>
                                </div>

                            </div>                             
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </section>



      <Footer />
    </>
  );
};

export default Home;
