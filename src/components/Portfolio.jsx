import React from 'react';
import Calcu from '../assets/img/calcu.png';
import Piaceres from '../assets/img/piaceres.png';
import Reed from '../assets/img/capturareed.png';


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: Reed,
        },
        {
            id: 2,
            src: Reed,
        },
        {
            id: 3,
            src: Reed,
        },
    ];

  return (
    <div
        name='portfolio'
        className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-700 '>Porfolio</p>
                <p className='py-6'>Look at my projects! They are made with a lot of love.</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({ id, src }) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img 
                src={src} 
                alt="" 
                className='rounded-md duration-200 hover:scale-105'
                />
                <div className='flex items-center justify-center'>
                    <a href='https://reed-project-gilt.vercel.app/' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                    <a href='https://github.com/antoruizx/Reed-Page' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                </div>
            </div>
            ))}
            </div>
        </div>

    </div>
  );
};

export default Portfolio;