import React from 'react'
import { SliderData } from './sliderData';

function ImageSlider() {
    return (
        <div>
            {
                SliderData.map((slide, index) => {
                    return <img key={index} src={process.env.PUBLIC_URL + slide.image} alt="My images" />
                })
            }
        </div>
    )
}

export default ImageSlider;
