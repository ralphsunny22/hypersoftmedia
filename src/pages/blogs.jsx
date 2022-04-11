import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/postActions';
import Blog from './blog';

const Blogs = () => {

    const posts = useSelector(state => state.post.posts)
    //console.log(posts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
        
    }, [dispatch])

  return (
    <>
        <section name="blog" className="blog section-padding bg-gray" data-scroll-index="4">
        <div className="container">
            <div className="row">

                <div className="section-head text-center col-sm-12">
                    <h4>Our Blog</h4>
                    <h6>Latest News</h6>
                    <h1 className="display-4 mb-2">{ posts.length > 0 ?? 'Posts' }</h1>
                </div>

                 

                {/* <!-- Posts --> */}
                <OwlCarousel loop={true} items={3} margin={30} autoplay ={true} >
                    {/* loop:true,
                    margin: 30,
                    mouseDrag:false,
                    autoplay:true,
                    smartSpeed:500,
                    responsiveClass:true, */}
                    
            
                { posts && posts.map(post => (
                    <Blog key={post.id} post={post} />
                ))}
        

                </OwlCarousel>

            </div>
        </div>
        <div className="se-tring se-tring-rev">
            <span className="left"></span>
            <span className="right"></span>
        </div>
    </section>
    </>
  )
}

export default Blogs