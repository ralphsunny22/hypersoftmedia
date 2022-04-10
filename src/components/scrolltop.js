import React, { useEffect } from 'react'
//import "./scrolltop.css"


const Scrolltop = () => {
  const [scrolled, setScrolled] = React.useState(false);
  
  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  }, [])

  return (
    <div className={scrolled ? 'd-block scrolled' : 'd-none'} onClick={topFunction}>
      <div className='myBtn'>
        <img src="./assets/img/circled-up.png" alt="" />
      </div>
    </div>
    
  )
}

export default Scrolltop