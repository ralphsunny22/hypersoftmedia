import React, { useEffect, useState } from 'react'

import { register } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';
import { useDispatch, useSelector } from 'react-redux';

import { Redirect, useNavigate } from 'react-router-dom';

import Header from "../components/header";
import Footer from "../components/footer";

const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone_number: "",
        password: "",
        password_confirmation: ""
    })

    const [errMsg, setErrMsg] = useState(null)
    const [nameErr, setNameErr] = useState(null)
    const [emailErr, setEmailErr] = useState(null)
    const [phoneNumberErr, setPhoneNumbeErr] = useState(null)
    const [passwordErr, setPasswordErr] = useState(null)
    const [passwordConfirmationErr, setPasswordConfirmationErr] = useState(null)

    const auth = useSelector(state => state.auth)
    const { userSuccessMsg, isAuthenticated } = auth;
    const error = useSelector(state => state.error)

    const dispatch = useDispatch()

    //checking errors
    useEffect(() => {
        if(error.id === 'REGISTER_FAIL'){
            setErrMsg(error.msg.message)
            setNameErr(error.msg.errors.name && error.msg.errors.name[0])
            setEmailErr(error.msg.errors.email && error.msg.errors.email[0])
            setPasswordErr(error.msg.errors.password && error.msg.errors.password[0])
            setPasswordConfirmationErr(error.msg.errors.password_confirmation && error.msg.errors.password_confirmation[0])
        }
        
    }, [error])

    //submit
    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(register(user));

        setUser({
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
        })

        setErrMsg(null)
        setNameErr(null)
        setEmailErr(null)
        setPasswordErr(null)
        setPasswordConfirmationErr(null)

        //clears generated by redux
        dispatch(clearErrors())
    }

    const navigate = useNavigate();

    if(isAuthenticated) return navigate("/");


    return (
        <>
          <Header homepage="false" />
        {/* contact */}
        <section className="contact section-padding" data-scroll-index="5">
            <div className="container">
                <div className="row">
    
                    <div className="section-head text-center col-sm-12">
                    { errMsg && <p className="alert alert-danger text-center">{errMsg}</p> }
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
                                            <input id="form_name" type="email" name="name" placeholder="Full Name *" required="required"
                                                data-error="Fullname is required."
                                                value={user.name}
                                                onChange={(e) => setUser({...user, name:e.target.value})}
                                                />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="form_email" type="email" name="email" placeholder="Email *" required="required"
                                            data-error="Valid email is required."
                                            value={user.email}
                                            onChange={(e) => setUser({...user, email:e.target.value})}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="form_subject" type="password" name="subject" placeholder="Password" required="required"
                                            value={user.password}
                                            onChange={(e) => setUser({...user, password:e.target.value})}
                                            />
                                            <span>at least 6 characters</span>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="form_message" type="number" min={0} name="phone_number" placeholder="Phone Number" required="required"
                                            value={user.phone_number}
                                            onChange={(e) => setUser({...user, phone_number:e.target.value})}
                                            />
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