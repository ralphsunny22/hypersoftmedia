import React from "react";
import Scrolltop from "./scrolltop";


const Footer = () => {
  
  return (
    <div>
        <Scrolltop />
        <footer className="text-center">
            <div className="container">


                <a className="logo" href="/">
                    HSM.          
                </a>
                
                <div className="social">
                    <a href="https://web.facebook.com/groups/1645522055831960/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/ralphsunny114" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a href="https://wa.me/2348066216874" target="_blank"><i className="fab fa-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/raphael-ugo-050431230/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/ralphsunny22" target="_blank"><i className="fab fa-github"></i></a>
                </div>

                <p>&copy; 2022 HyperSoftMedia. All Rights Reserved.</p>

            </div>
        </footer>
    </div>
  );
};

export default Footer;
