import React from 'react';
import AntoImage from '../assets/img/anto-2.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div
    name="home"
    className='h-screen w-full bg-gradient-to-b from-black to-gray-800'
    >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div>
                <h2>I'm FullStack Developer</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur asperiores magnam sapiente assumenda sit consequatur iure nobis incidunt aperiam, architecto facere tempore iste corrupti dolorum, officiis nam earum sunt perferendis.
                </p>
                <div>
                    <button>
                        Portfolio
                        <span>
                            <MdOutlineKeyboardArrowRight />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;