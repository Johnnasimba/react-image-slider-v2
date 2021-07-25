import React, { useState } from 'react'
import { SliderData } from './sliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

function ImageSlider({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length

    const nextSlide = () => {     
        setCurrent(current === length - 1? 0 : current + 1)
    }
 
    const prevSlide = () => {
        setCurrent(current === 0? length - 1 : current - 1)
    }
    console.log(current);

//    Return nothing when slides array contains no data
    if(!Array.isArray(slides) ||slides.length <= 0) {
        // Array.isArray() checks whether an object is an array
        return null
    }

    return (
        <div className='image-slider'>
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {
                SliderData.map((slide, index) => {
                    return <img key={index} src={process.env.PUBLIC_URL + slide.image} className="image" alt="My images" />
                })
            }
        </div>
    )
}

export default ImageSlider;
