import React from 'react';
import AntoImage from '../assets/img/anto-neon.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link, ScrollLink } from 'react-scroll';
import pdf from '../assets/docs/cv-developer-nar.pdf';
import LanguageButton from './LanguageButton';


const Home = () => {
  return (
    <div
    name="home"
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm FullStack Developer</h2>
                <p className='text-white py-4 max-w-md'>
                Hello! I am Nadia Antonella Ruiz, I live in Tucumán, Argentina. Worked on projects using technologies such as React, Express.js, MongoDB, and more. My approach is to create solutions that are both functional and aesthetically appealing.
                </p>
                <div>
                    <a 
                    href='https://drive.google.com/uc?id=1HS64IC5h61iniTJedcjz-S6LAkQajpm9&export=download'
                    smooth duration={500} 
                    className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-600 to-purple-900 hover:scale-110 duration-300 font-bold cursor-pointer'>
                    Download CV
                    </a>

                </div>
            </div>

            <div>
                <img 
                src={AntoImage} 
                alt="my profile" 
                className='rounded-2xl mx-auto w-2/3 md:w-full'
                />
            </div>
            <LanguageButton />
        </div>
    </div>
  );
};

export default Home;