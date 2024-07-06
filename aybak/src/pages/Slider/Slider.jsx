import React from 'react'
import './Slider.css'
import aybk from "../../assets/1.jpg";
import oden1 from "../../assets/2.jpg";
import odenay from "../../assets/3.jpg";

function Slider() {
    return (
        <div className='slider-box'>
            <div className='slider-1'><img className='slider-img' src={aybk} /></div>
            <div className='slider-1'><img className='slider-img' src={oden1} /></div>
            <div className='slider-1'><img className='slider-img' src={odenay} /></div>
        </div>
    )
}

export default Slider