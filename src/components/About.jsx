import React from 'react';
import '../styles/About.css';
import { useTranslation } from 'react-i18next';


const About = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <div
        name='about'
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
        >
            <div id='about-container' className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-purple-700'>
                    {t("about.title")}
                    </p>
                </div>
            
                <p className='text-xl'>
                {t("about.body")}
                </p>
            </div>
        </div>
    );
};

export default About;