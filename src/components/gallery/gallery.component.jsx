import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './gallery.styles.scss'
 
const slideImages = [
  'https://res.cloudinary.com/damtrix/image/upload/homePage/IMG-20200628-WA0020_jmsikb.jpg',
  'https://res.cloudinary.com/damtrix/image/upload/homePage/building1_ruzxyk.jpg',
  'https://res.cloudinary.com/damtrix/image/upload/v1593809734/homePage/IMG-20200628-WA0018_xaagvp.jpg'
];
 
const Gallery = () => {
  return (
    <div className="container">
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  )
};

export default Gallery