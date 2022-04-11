import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';

import { getPost, addPostComment } from '../actions/postActions';
import Header from '../components/header';
import '../components/header.css'
import Footer from '../components/footer';

const SingleBlog = () => {

    //used in form, and onSubmit()
    const [postComment, setPostComment] = useState({
        sender_id: "",
        sender_name: "",
        message: ""
    })
    
    const [messageErr, setMessageErr] = useState(null)
    
    //mapStateToVariables
    const post = useSelector(state => state.post.post);
    const randomPosts = useSelector(state => state.post.randomPosts);
    const postComments = useSelector(state => state.post.postComments);
    //check addPostComment errors
    const commentSuccessMsg = useSelector(state => state.post.commentSuccessMsg)
    const error = useSelector(state => state.error)
    
    //console.log(postComments)

    const dispatch = useDispatch()
    const {slug} = useParams(); //instead of props.match.params
    // console.log(slug)

    const topFunction = () => {
        window.scrollTo({ top: 0 });
        
      }

    useEffect(() => {
        dispatch(getPost(slug))
        
        topFunction()

        if(error.id === 'ADD_POST_COMMENT_FAIL'){
            setMessageErr(error.msg.errors.message && error.msg.errors.message[0])
        }
    }, [dispatch, slug, error])

    //submitting textarea form. postComment state is mutating at this point
    const onSubmit = (e) => {
        e.preventDefault();

        const newPostComment = new FormData(); //accepts every change from the form
        newPostComment.append('sender_id', 1)
        newPostComment.append('sender_name', 'Ugo Sunday Raphael')
        newPostComment.append('message', postComment.message)
        newPostComment.append('slug', slug)
        
        dispatch(addPostComment(newPostComment))

        setPostComment({
            sender_id: "",
            sender_name: "",
            message: ""
        })

    }

    function randomStyle(e) {
        e.target.style.color = 'black';
      }

    const textarea_form_message = {
        border: "1px solid #e5e7eb",
        width: "100%",
        backgroundColor: "#e5e7eb",
        padding: "5px",
        borderRadius: "5px"
    };

    const button = {
        WebkitAappearance: "button !important",
        backgroundColor: "none !important",
        backgroundImage: "none !important"
    }


    return (
        <>
          <Header homepage="false" />
          
          <section className="contact section-padding" data-scroll-index="5">
            <div className="container">
                <div className="row">
    
                    <div className="section-head text-center col-sm-12">
                        <h4>{ post.title }</h4>
                        <h6>{ post.created_at }</h6>
                    </div>
                    
                    {/* <!-- Contact Form --> */}
                    <div className="col-md-12">
                        
                        <div className="controls">
    
                            <div className="row">
    
                                <div className="col-md-10">

                                    <div className="item mb-30">
                                        <div className="post-img">
                                            <img src="/assets/img/blog/1.jpg" align="left" alt="" style={{width: "30%", margin: "0 15px 0 0"}}/>
                                        </div>
                                        
                                        <div className="content">

                                            <p className='justify' style={{ color:'#00000A' }}>{ post.description }</p>
                                            
                                            <span><a href="#0">
                                                <em>{ post.category_id }</em>
                                            </a></span>
                                            <h5><a href="#0">{ post.tags }</a></h5>
                                             
                                        </div>
                                    </div> <br /><br /><br /><br />

                                    <div className="form-group">
                                    { commentSuccessMsg && <p className="alert alert-success text-center">Comment Added Succesfully</p> }
                                        <h5>Join the conversation</h5>
                                        <form onSubmit={onSubmit}>

                                            <textarea id="form_message" style={textarea_form_message}
                                                name="message" placeholder="Your Message *"
                                                rows="4" required="required"
                                                value={postComment.message || ''}
                                                onChange={(e) => setPostComment({...postComment, message:e.target.value})}
                                            />
                                            { messageErr && <div className="help-block with-errors text-danger">{messageErr}</div> }

                                            
                                            <div className='text-right' style={{width:'100%'}}>
                                                <button style={{ backgroundColor: 'none !important' }} type="submit" className="butn butn-bg mt-2"><span>Send Message</span></button>
                                            </div>

                                        </form>

                                    </div>
                                    
                                    <ul>
                                        {
                                            postComments ? (
                                                <div className='mb-5'><b>Comments:</b></div>
                                                ) : (
                                                    <>
                                                        <div className='mb-5'><b>Comments:</b></div>
                                                        <div>No Comments</div>
                                                    </>
                                                    )
                                        }
                                        
                                        
                                        { postComments && postComments.map(comment => (
                            
                                            <li key={comment.id} className="mb-3 p-3" onMouseOver={randomStyle} style={{ background:"#e5e7eb80" }}>
                                                <div style={{ backgroundColor: 'rgba(229, 231, 235, 0.5)' }}>
                                                    <em>{comment.sender_name}</em>
                                                    <span className='ml-3'>   {comment.created_at}</span>
                                                </div>
                                                {comment.message}
                                            </li>
                                            
                                        ))}
                                        
                                    </ul>
                                    
                                        
                                </div>

                                <div className="col-md-2">
                                    <div className='text-white text-center p-3' style={{ backgroundColor:"#1c1c1c" }}>Random Articles</div>
                                    <div className='mt-3'>
                                        <ul>
                                        { randomPosts && randomPosts.map(post => (
                                            // <Blog key={post.id} post={post} />
                                            <li key={post.id} className="mb-3" onMouseOver={randomStyle} style={{fontSize:"12px", cursor:"pointer"}}>
                                                <Link to={`/post/${post.slug}`}>{post.title}</Link>
                                            </li>
                                            
                                        ))}
                                            
                                            
                                        </ul>
                                    </div>
                                </div>
                                    
    
                            </div>                             
                        </div>
                       
                    </div>
    
                </div>
            </div>
        </section>
    
          <Footer />
        </>
      );
}

export default SingleBlog