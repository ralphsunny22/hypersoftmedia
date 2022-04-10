import React from 'react'

import Header from "../components/header";
import Footer from "../components/footer";

const Login = () => {
    return (
        <>
          <Header homepage="false" />
        {/* contact */}
        <section className="contact section-padding" data-scroll-index="5">
            <div className="container">
                <div className="row">
    
                    <div className="section-head text-center col-sm-12">
                        <h4>Login</h4>
                        <h6>Stay In Touch</h6>
                    </div>
                    
                    {/* <!-- Contact Form --> */}
                    <div className="col-md-12">
                        <form className="form" id="contact-form" method="post" action="">
    
                            <div className="messages"></div>
    
                            <div className="controls">
    
                                <div className="row">
    
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="form_name" type="email" name="email" placeholder="Email *" required="required" data-error="Firstname is required." />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="form_email" type="password" name="password" placeholder="Password *" required="required" data-error="Valid email is required." />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-none">
                                        <div className="form-group">
                                            <input id="form_subject" type="text" name="subject" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 d-none">
                                        <div className="form-group">
                                            <textarea id="form_message" name="message" placeholder="Your Message *" rows="4" required="required" data-error="Your message is required."></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
    
                                    <div className="col-md-12">
                                        <button type="submit" className="butn butn-bg"><span>Send Message</span></button>
                                        <div className="info">
                                            <span><strong>Forgot Password?</strong> : Click Here</span>
                                            <span><strong>OR</strong> Click Register to Sign-Up</span>
                                            
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

export default Login