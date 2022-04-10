import React from "react";
import Scrolltop from "./scrolltop";


const Footer = () => {
  
  return (
    <div>
        <Scrolltop />
        <footer className="text-center">
            <div className="container">


                <a className="logo" href="#">
                    HSM.          
                </a>
                
                <div className="social">
                    <a href="#0"><i className="fab fa-facebook-f"></i></a>
                    <a href="#0"><i className="fab fa-twitter"></i></a>
                    <a href="#0"><i className="fab fa-instagram"></i></a>
                    <a href="#0"><i className="fab fa-linkedin"></i></a>
                    <a href="#0"><i className="fab fa-behance"></i></a>
                </div>

                <p>&copy; 2022 HyperSoftmedia. All Rights Reserved.</p>

            </div>
        </footer>
    </div>
  );
};

export default Footer;
