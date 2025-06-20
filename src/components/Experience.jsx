import React from 'react';
import reactIcon from "../assets/img/icons skills/react.png";
import html from "../assets/img/icons skills/html-5.png";
import css from "../assets/img/icons skills/css-3.png";
import bootstrap from "../assets/img/icons skills/bootstrap.png";
import javascript from "../assets/img/icons skills/archivo-js.png";
import mongodb from "../assets/img/icons skills/mongodb-icon-1.svg";
import tailwind from "../assets/img/icons skills/tailwind.png";
import github from "../assets/img/icons skills/github.png";
import nodeJs from "../assets/img/icons skills/nodejs.png";
import Postman from "../assets/img/icons skills/postman-icon.svg";
import '../styles/Experience.css';
import { useTranslation } from 'react-i18next';


const Experience = () => {
    const [t, i18n] = useTranslation("global");

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactIcon,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },
        {
            id: 6,
            src: mongodb,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
        {
            id: 7,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-purple-400'
        },
        {
            id: 8,
            src: github,
            title: 'Github',
            style: 'shadow-purple-600'
        },
        {
            id: 9,
            src: nodeJs,
            title: 'Node JS',
            style: 'shadow-green-600'
        },
        {
            id: 10,
            src: Postman,
            title: 'Postman',
            style: 'shadow-orange-600'
        },
    ];

  return (
    <div 
        name='experience'
        className='bg-gradient-to-b from-gray-800 to-black w-full  text-white md:h-screen'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div id='experience-container'>
                <p  className='text-4xl font-bold inline border-b-4 border-purple-700 '>{t("experience.title")}</p>
                <p className='py-6 mb-10'>{t("experience.body")}</p>
            </div>

            <div className='mb-40 w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0'>

            {techs.map(({ id, src, title, style }) => (
                <div 
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
            </div>
            ))}

            </div>
        </div>
    </div>
  )
}

export default Experience;