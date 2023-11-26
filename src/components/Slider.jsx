import React from 'react';
import '../styles/Slider.css';
import HTML from '../assets/img/icons skills/html-5.png';
import CSS from '../assets/img/icons skills/css-3.png';
import Javascript from '../assets/img/icons skills/archivo-js.png';
import Bootstrap from '../assets/img/icons skills/bootstrap-5-1.svg';
import iconReact from '../assets/img/icons skills/react-2.svg';

const Slider = () => {

  return (
    <div className='body'>
    <div className="slider">
        <div className="slide-track">
            <div className='slide'>
                <img src={HTML} alt="" />
            </div>

            <div className='slide'>
                <img src={CSS} alt="" />
            </div>

            <div className='slide'>
                <img src={Javascript} alt="" />
            </div>

            <div className='slide'>
                <img src={Bootstrap} alt="" />
            </div>

            <div className='slide'>
                <img src={iconReact} alt="" />
            </div>
        </div>
        </div>
    </div>
    
  );
};

export default Slider;