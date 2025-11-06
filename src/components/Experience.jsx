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
import ExpressJs from "../assets/img/icons skills/expressjs.svg";
import Python from "../assets/img/icons skills/python.svg";
import ViteJs from "../assets/img/icons skills/Vite.svg";
import CSharp from "../assets/img/icons skills/csharp.svg";
import MySQL from "../assets/img/icons skills/mysql.svg";
import Firebase from "../assets/img/icons skills/Firebase.svg";
import Terraform from "../assets/img/icons skills/Terraform.svg";
import Docker from "../assets/img/icons skills/Docker.svg";
import AWS from "../assets/img/icons skills/AWS.svg";
import '../styles/Experience.css';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const [t, i18n] = useTranslation("global");

  const techs = [
    { id: 1, src: html, title: 'HTML', style: 'shadow-orange-500' },
    { id: 2, src: css, title: 'CSS', style: 'shadow-blue-500' },
    { id: 3, src: javascript, title: 'Javascript', style: 'shadow-yellow-500' },
    { id: 4, src: reactIcon, title: 'React', style: 'shadow-blue-600' },
    { id: 5, src: bootstrap, title: 'Bootstrap', style: 'shadow-purple-500' },
    { id: 6, src: mongodb, title: 'MongoDB', style: 'shadow-green-500' },
    { id: 7, src: tailwind, title: 'Tailwind', style: 'shadow-purple-400' },
    { id: 8, src: github, title: 'Github', style: 'shadow-purple-600' },
    { id: 9, src: nodeJs, title: 'NodeJs', style: 'shadow-green-600' },
    { id: 10, src: Postman, title: 'Postman', style: 'shadow-orange-600' },
    { id: 11, src: ExpressJs, title: 'ExpressJs', style: 'shadow-gray-500' },
    { id: 12, src: ViteJs, title: 'ViteJs', style: 'shadow-purple-600' },
    { id: 13, src: Python, title: 'Python', style: 'shadow-yellow-500' },
    { id: 14, src: CSharp, title: 'C#', style: 'shadow-purple-500' },
    { id: 15, src: MySQL, title: 'MySQL', style: 'shadow-blue-500' },
    { id: 16, src: Firebase, title: 'Firebase', style: 'shadow-orange-500' },
    { id: 17, src: Terraform, title: 'Terraform', style: 'shadow-purple-500' },
    { id: 18, src: Docker, title: 'Docker', style: 'shadow-blue-500' },
    { id: 19, src: AWS, title: 'AWS', style: 'shadow-orange-500' },
  ];

  return (
    <div 
      name='experience'
      className='bg-gradient-to-b from-gray-800 to-black w-full text-white py-24'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div id='experience-container' className='text-center pb-12'>
          <p className='text-4xl font-bold inline border-b-4 border-purple-700'>
            {t("experience.title")}
          </p>
          <p className='text-lg text-gray-300 mt-6'>
            {t("experience.body")}
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0'>
          {techs.map(({ id, src, title, style }) => (
            <div 
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
