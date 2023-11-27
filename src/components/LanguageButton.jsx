import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageButton.css';

function LanguageButton() {
    const [t, i18n] = useTranslation("global");
  return (
    <div >
        <h1 className='text-white'>{t("header.hello-world")}</h1>
        <br />

        <div className='container padre'>
            <div>
                <button onClick={() => i18n.changeLanguage("es")} className='text-white bg-gradient-to-b from-purple-600 to-purple-900 px-3 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-bold es '>ES</button> 
            </div>

            <div>
                <button onClick={() => i18n.changeLanguage("en")} className='text-white bg-gradient-to-b from-purple-600 to-purple-900 px-3 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-bold en'>EN</button> 
            </div>

        </div>

    </div>
  );
};

export default LanguageButton;