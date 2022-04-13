import React from 'react'
import { Link } from 'react-router-dom';

const Work = (props) => {
    const { logo, title, description, url } = props;

    const imgStyle = {
        width:'30%',
        height:'100%',
        objectFit:'cover'
    }

    const inner_item = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
    }

  return (
    <>
        <div className="col-lg-4 col-md-6">
            <div className="item ">
                {/* <span className="icon"><i className="icon-laptop"></i></span> */}
                <div className="inner_item" style={inner_item}>
                    <img className="rounded" style={imgStyle} src={`./assets/img/work/${logo}`} alt="" />
                </div>
                <div className="mt-10">
                <a href={`https://${url}`} target="_blank"><h6>{title}</h6></a>
                    <p>{description}</p>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Work