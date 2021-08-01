import React from 'react';

import './dots.styles.css';


const Dots = ({numberOfSlides, currentSlide, goToSelectedSlide}) => {
    
    return (
        <div className="dots-wrapper">
            {
                Array(numberOfSlides).fill(1).map((_, index)=> (
                    <div 
                    className="dot"
                    key={index}
                    style={{background: currentSlide === index? 'black': 'white'}}
                    onClick={() =>goToSelectedSlide(index)}
                    ></div>
                   
                ))
            }
        </div>
    )  
}
export default Dots;