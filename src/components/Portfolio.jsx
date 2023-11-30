import React from 'react';
import Reed from '../assets/img/capturareed.png';
import '../styles/Portfolio.css';
import { useTranslation } from 'react-i18next';


const Portfolio = () => {
    const [t, i18n] = useTranslation("global");

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
            <div id='portfolio-container' className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-700 '>{t("portfolio.title")}</p>
                <p className='py-6'>{t("portfolio.body")}</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-40'>
            {portfolios.map(({ id, src}) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img 
                src={src} 
                alt="" 
                className='rounded-md duration-200 hover:scale-105'
                />
                <div className='flex items-center justify-center'>
                    <a href='https://reed-project-gilt.vercel.app/' className='w-1/2 px-12 py-2 m-2 font-bold duration-200 hover:scale-105'>Reed</a>

                </div>
            </div>
            ))}
            </div>
        </div>

    </div>
  );
};

export default Portfolio;