import React from 'react';
import AntoImage from '../assets/img/anto-neon.png';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageButton.css';

const Home = () => {
    const [t, i18n] = useTranslation("global");
    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    }
    return (
        <div
            name="home"
            className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
        >
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>{t("home.title")}</h2>
                    <p className='text-white py-4 max-w-md'>
                        {t("home.body")}
                    </p>
                    <div>
                        <a
                            href='https://drive.google.com/uc?export=download&id=1qLZMppVvccFBmvrX407THo_qxluELiiT'
                            smooth duration={500}
                            className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-600 to-purple-900 hover:scale-110 duration-300 font-bold cursor-pointer'>
                            {t("home.cv")}
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

                <div className='container padre'>
                    <button onClick={() => handleChangeLanguage("en")} className='text-white bg-gradient-to-b from-purple-600 to-purple-900 px-3 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-bold en'>EN</button>

                    <button onClick={() => handleChangeLanguage("es")} className='text-white bg-gradient-to-b from-purple-600 to-purple-900 px-3 py-3 my-4 mx-auto flex rounded-md hover:scale-110 duration-300 font-bold es'>ES</button>
                </div>

            </div>
        </div>
    );
};

export default Home;