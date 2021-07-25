import React, { useState } from 'react'
import { SliderData } from './sliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

function ImageSlider({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length

//    Return nothing when slides array contains no data

    if(!Array.isArray(slides) ||slides.length <= 0) {
        // Array.isArray() function is used to check wether an object is an array
        return null
    }

    return (
        <div className='image-slider'>
            <FaArrowAltCircleLeft className="left-arrow"  />
            <FaArrowAltCircleRight className="right-arrow" />
            {
                SliderData.map((slide, index) => {
                    return <img key={index} src={process.env.PUBLIC_URL + slide.image} className="image" alt="My images" />
                })
            }
        </div>
    )
}

export default ImageSlider;
