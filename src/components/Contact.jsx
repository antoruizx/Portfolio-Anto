import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div
        name='contact'
        className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'
    >
        <div className='flex flex-col p-4 justify-center max-w-screen mx-auto h-full'>
            <div id='contact-container' className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Contact</p>
                <p className='py-6'>If you are interested in working with me. Write me!</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/f95557a2-dcba-4366-8a34-6031d517d2f5' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input 
                    type='text' 
                    name='name'
                    placeholder='Enter your name'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <br />
                    <input 
                    type='text' 
                    name='email'
                    placeholder='Enter your email'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <br />
                    <textarea 
                    name='message' 
                    placeholder='Enter your message'
                    rows="10"
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    ></textarea>
                    <button className='text-white bg-gradient-to-b from-purple-600 to-purple-900 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Send</button>
                </form>

            </div>
            <br />
        </div>
    </div>
  );
};

export default Contact;