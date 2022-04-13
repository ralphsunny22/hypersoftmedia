import React from 'react'

const ProgressBar = ({skill, bgcolor, progress}) => {
	
	const Childdiv = {
		width: `${progress}%`,
		backgroundColor: bgcolor,
	    borderRadius:40,
		textAlign: 'right'
	}
	
	
		
	return (
        <>
            <div className="skill-item">
                <h6>{skill}<span>{`${progress}%`}</span></h6>
                <div className="skills-progress" style={Childdiv}><span data-value="90%"></span></div>
            </div>
        </>

    
	)
}

export default ProgressBar;
