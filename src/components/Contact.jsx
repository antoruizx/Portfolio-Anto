import React from 'react';
import '../styles/Contact.css';
import { useTranslation } from 'react-i18next';


const Contact = () => {
    const [t, i18n] = useTranslation("global");

  return (
    <div
        name='contact'
        className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'
    >
        <div className='flex flex-col p-4 justify-center max-w-screen mx-auto h-full'>
            <div id='contact-container' className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-600'>{t("contact.title")}</p>
                <p className='py-5 mb-1'>{t("contact.body")}</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/f95557a2-dcba-4366-8a34-6031d517d2f5' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input 
                    type='text' 
                    name='name'
                    placeholder={t("contact.name-placeholder")}
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <br />
                    <input 
                    type='text' 
                    name='email'
                    placeholder={t("contact.email-placeholder")}
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <br />
                    <textarea 
                    name='message' 
                    placeholder={t("contact.message-placeholder")}
                    rows="10"
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    ></textarea>
                    <button className='text-white bg-gradient-to-b from-purple-600 to-purple-900 px-5 py-2 my-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>{t("contact.send")}</button>
                </form>

            </div>
            <br />
        </div>
    </div>
  );
};

export default Contact;