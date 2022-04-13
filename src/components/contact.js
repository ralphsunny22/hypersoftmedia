import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { addContact } from '../actions/contactActions';


const Contact = () => {

    //used in form, and onSubmit()
    const [postContact, setPostContact] = useState({
        sender_name: "",
        sender_email: "",
        subject: "",
        message: ""
    })
    
    const [senderNameErr, setSenderNameErr] = useState(null)
    const [senderEmailErr, setSenderEmailErr] = useState(null)
    const [subjectErr, setSubjectErr] = useState(null)
    const [messageErr, setMessageErr] = useState(null)
    
    //mapStateToVariables
    const contactSuccessMsg = useSelector(state => state.contact.contactSuccessMsg)
    const error = useSelector(state => state.error)

    console.log()
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(error.id === 'ADD_CONTACT_FAIL'){
            
            setSenderNameErr(error.msg.errors.sender_name && error.msg.errors.sender_name[0])
            setSenderEmailErr(error.msg.errors.sender_email && error.msg.errors.sender_email[0])
            setSubjectErr(error.msg.errors.subject && error.msg.errors.subject[0])
            setMessageErr(error.msg.errors.message && error.msg.errors.message[0])
        }
    }, [error])

    //submitting textarea form. postComment state is mutating at this point
    const onSubmit = (e) => {
        e.preventDefault();

        const newContact = new FormData(); //accepts every change from the form
        newContact.append('sender_name', postContact.sender_name)
        newContact.append('sender_email', postContact.sender_email)
        newContact.append('subject', postContact.subject)
        newContact.append('message', postContact.message)
        
        
        dispatch(addContact(newContact))

        setPostContact({
            sender_name: "",
            sender_email: "",
            subject: "",
            message: ""
        })

    }

    
    return (
        <>
          <section name="contact" className="contact section-padding" data-scroll-index="5">
            <div className="container">
                <div className="row">

                    <div className="section-head text-center col-sm-12">
                        <h4>Contact Me</h4>
                        <h6>Get In Touch</h6>
                        { contactSuccessMsg && <p className="alert alert-success text-center">Message Received Successfully. I'll get back to you</p> }
                    </div>
                    
                    {/* <!-- Contact Form --> */}
                    <div className="col-md-12">
                        <form className="form" id="contact-form" onSubmit={onSubmit}>

                            <div className="messages"></div>

                            <div className="controls">

                                <div className="row">

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <input id="sender_name" type="text" name="sender_name" placeholder="Full Name *" required="required"
                                                
                                                value={postContact.sender_name}
                                                onChange={(e) => setPostContact({...postContact, sender_name:e.target.value})}
                                                />
                                                { senderNameErr && <div className="help-block with-errors text-danger">{senderNameErr}</div> }
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <input id="form_email" type="text" name="sender_email" placeholder="Email *" required="required"

                                            value={postContact.sender_email}
                                            onChange={(e) => setPostContact({...postContact, sender_email:e.target.value})}
                                            />
                                            { senderEmailErr && <div className="help-block with-errors text-danger">{senderEmailErr}</div> }
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <input id="form_subject" type="text" name="subject" placeholder="Subject *" required="required"

                                            value={postContact.subject}
                                            onChange={(e) => setPostContact({...postContact, subject:e.target.value})}
                                            />
                                            { subjectErr && <div className="help-block with-errors text-danger">{subjectErr}</div> }
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea id="form_message" name="message" placeholder="Your Message *" rows="4" required="required"
                                            
                                            value={postContact.message}
                                            onChange={(e) => setPostContact({...postContact, message:e.target.value})}
                                            />
                                            { messageErr && <div className="help-block with-errors text-danger">{messageErr}</div> }
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <button type="submit" className="butn butn-bg"><span>Send Message</span></button>
                                        <div className="info">
                                            <span><strong>Email</strong> : ralphsunny114@gmail.com</span>
                                            <span><strong>Phone</strong> : +234 80 6621 6874</span>
                                        </div>
                                    </div>

                                </div>                             
                            </div>
                        </form>
                    </div>

                </div>
            </div>
         </section>
        </>
      );
}

export default Contact