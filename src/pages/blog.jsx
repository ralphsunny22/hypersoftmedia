import React from 'react'
import { Link } from 'react-router-dom';

const Blog = ({post}) => {
    
    // const truncate = () => {
    //     if (post.description.length > 5) {
    //         return input.substring(0, 5) + '...';
    //      }
    //      return post.description;
    // }
    const truncate = (input) => input.length > 5 ? `${input.substring(0, 50)}...` : input;
    
  return (
    <>
    <div className="item mb-30">
        <div className="post-img">
            <img src="./assets/img/blog/1.jpg" alt="" />
        </div>
        <div className="content">
            <span><a href="#0">{ post.created_at }</a></span>
            <span>/</span>
            <span><a href="#0">
                <em>{ post.category_id }</em>
            </a></span>
            <h5><a href="#0">{ post.title }</a></h5>
            <p>{ truncate(post.description) }</p>
            <Link to={`/post/${post.slug}`} className="more">Continue Reading<i className="fas fa-angle-right"></i></Link>
        </div>
    </div>
    </>
  )
}

export default Blog