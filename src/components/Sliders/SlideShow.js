import React from 'react';
import { Slide } from 'react-slideshow-image';
import './SlideShow.css';
import i2 from '../images/i2.jpeg';
import i3 from '../images/i3.jpeg';
import i4 from '../images/i4.jpeg';
import i5 from '../images/i5.jpeg';
import i6 from '../images/i6.jpeg';
import i7 from '../images/i7.jpeg';
 
const slideImages = [i2,i3,i4,i5,i6,i7];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
 
const SlideShow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}} >
        </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
        </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
        </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
        </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
        </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
        </div>
        </div>

      </Slide>
    )
}

export default SlideShow;