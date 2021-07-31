import React, { useState, useEffect } from 'react'
import { SliderData } from './sliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import Dots from './dots/dots.component';

function ImageSlider({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length

    const nextSlide = () => {     
        setCurrent(current === length - 1? 0 : current + 1)
    }
 
    const prevSlide = () => {
        setCurrent(current === 0? length - 1 : current - 1)
    }
    
    const goToSelectedSlide = (index) => {
        setCurrent(index)
    }
  
  
    useEffect(() => {
        window.addEventListener('keydown', e => {
          if(e.key === "ArrowLeft") {
              prevSlide();
          }else if(e.key === "ArrowRight") {
             nextSlide();
          } else {
              return
          }
        })
    })

//    Return nothing when slides array contains no data
    if(!Array.isArray(slides) ||slides.length <= 0) {
        // Array.isArray() checks whether an object is an array
        return null
    }

    return (
        <div className='image-slider'>
            <FaArrowAltCircleLeft className="left-arrow" onClick = {prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {
                SliderData.map((slide, index) => {
                    return(
                        <div className={index === current? 'slide active': 'slide'} key={index} >
                            {
                                index === current && (
                                    <img src={process.env.PUBLIC_URL + slide.image} className="image" alt="My images" />

                                )
                            }
                        </div>
                    ) 
                    
                })
            }
            <Dots numberOfSlides={length} currentSlide={current} goToSelectedSlide={goToSelectedSlide} />
        </div>
    )
}

export default ImageSlider;
