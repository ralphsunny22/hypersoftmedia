import React from 'react'

import Header from "../components/header";
import Footer from "../components/footer";

const Register = () => {
    return (
        <>
          <Header homepage="false" />
        {/* contact */}
        <section className="contact section-padding" data-scroll-index="5">
            <div className="container">
                <div className="row">
    
                    <div className="section-head text-center col-sm-12">
                        <h4>Register</h4>
                        <h6>Get In Touch</h6>
                    </div>
                    
                    {/* <!-- Contact Form --> */}
                    <div className="col-md-12">
                        <form className="form" id="contact-form" method="post" action="">
    
                            <div className="messages"></div>
    
                            <div className="controls">
    
                                <div className="row">
    
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="form_name" type="email" name="name" placeholder="Name *" required="required" data-error="Firstname is required." />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="form_email" type="email" name="email" placeholder="Email *" required="required" data-error="Valid email is required." />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="form_subject" type="text" name="subject" placeholder="Password" required="required" />
                                            <span>at least 6 characters</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="form_message" type="number" min={0} name="number" placeholder="Phone Number" required="required" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
    
                                    <div className="col-md-12">
                                        <button type="submit" className="butn butn-bg"><span>Send Message</span></button>
                                        <div className="info">
                                            <span><strong>OR</strong> Click Login to Sign-In</span>
                                            
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
}

export default Register