import React, { useEffect, useRef } from "react";

import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import './header.css';

const Header = (props) => {

    const [scrolled, setScrolled] = React.useState(false);
    // const [homepg, setHomepg] = React.useState(true);

    const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  }, [])
    let navbarClasses=['navbar'];
    if(scrolled){
    navbarClasses.push('scrolled');
  }

  const onGotoAbout = () => {
    props.onGotoAbout()
  }

  // const aboutSection = useRef(null);

  // const gotoAbout = () => {
  //     window.scrollTo({
  //         top: aboutSection.current.offsetTop,
  //         behavior: 'smooth'
  //     })
  // }

    const mystyle = {
        cursor: "pointer"
      };

    const navItems = [
        {
          id: 1,
          title: "Home",
          url: "home",
        },
        {
          id: 2,
          title: "About",
          url: "about",
        },
        {
          id: 3,
          title: "Services",
          url: "services",
        },
        {
          id: 4,
          title: "Blog",
          url: "blog",
        },
        {
          id: 5,
          title: "Contact",
          url: "contact",
        },
      ];

      const navLists = navItems.map((nav) => (
        <li className="nav-item" style={mystyle}>
          <Link className="nav-link" activeClass="active" spy={true} to={nav.url} smooth={true} offset={0} duration={500}>
            {nav.title}
          </Link>
        </li>
      ));
  
  return (
    <>
    
    
    {props.homepage==="true" ?  (
      <div className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <nav className="navbar navbar-expand-lg">
          <div className="container">

                {/* Logo */}
                <a className="logo" href="/">
                    HSM.      
                </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar"><i className="fas fa-bars"></i></span>
            </button>

            {/* navbar links */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                
                {navLists}

                {/* <li className="nav-item" style={mystyle}>
                  <NavLink to="/about" onClick={e => {e.preventDefault(); onGotoAbout()}} className="nav-link">
                    About
                  </NavLink>
                </li> */}

                <li className="nav-item" style={mystyle}>
                  <NavLink exact to="/login" className="nav-link" activeClass="active">
                    Join Me!
                  </NavLink>
                </li>

              </ul>
            </div>

                    

          </div>
      </nav>
      </div>
      ) : (
        <div className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">

                {/* Logo */}
                <a className={scrolled ? 'logo text-white' : 'logo nav-alt-color'} href="/">
                    HSM.      
                </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar"><i className="fas fa-bars"></i></span>
            </button>

            {/* navbar links */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                
                <li className="nav-item" style={mystyle}>
                  <NavLink exact to="/" className={scrolled ? 'nav-link text-white' : 'nav-link nav-alt-color'} activeClass="active">
                    Home 
                  </NavLink>
                </li>

                <li className="nav-item" style={mystyle}>
                  <NavLink exact to="/register" className={scrolled ? 'nav-link text-white' : 'nav-link nav-alt-color'} activeClass="active">
                    Register
                  </NavLink>
                </li>

                <li className="nav-item" style={mystyle}>
                  <NavLink exact to="/login" className={scrolled ? 'nav-link text-white' : 'nav-link nav-alt-color'} activeClass="active">
                    Login
                  </NavLink>
                </li>

              </ul>
            </div>

                    

          </div>
      </nav>
      </div>
      ) }
        
    </>
  );
};

export default Header;
