import React from 'react'
import "../stylehidden.css";
import { useState } from 'react';


const Hiddensearchbar = () => {
    const [currentIndex,setCurrentIndex]=useState(0);
    const testimonials=[
        {
            quote:"hhhhhhhhh",
            author:"jane deo",
        },
        {
             quote:"Tiiiiiiiiiiiiiiiii",
             author:"jane deo",
        },
        {
             quote:"Thisggggggggggggggg",
             author:"jane deo",
        },
        {
             quote:"sddddddddddddddddddddd",
             author:"jane deo",
        }
    ]

    const handlePrevClick=()=>{
        setCurrentIndex(
            (currentIndex+testimonials.length-1)%testimonials.length
        );
    }

    const handleNextClick=()=>{
        setCurrentIndex((currentIndex+1)%testimonials.length)
    }

  return (
    <div className='testimonials'>
        <div className='testimonials-quote'>
            {testimonials[currentIndex].quote}
        </div>
        <div className='testimonials-author'>
           - {testimonials[currentIndex].author}
        </div>


        <div className='testimonials-nav'>
            <button onClick={handlePrevClick}>prev</button>

            <button onClick={handleNextClick}>next</button>
           
        </div>

    </div>
  )
}

export default Hiddensearchbar