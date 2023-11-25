import React from 'react';

const About = () => {
    return (
        <div
        name='about'
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-purple-700'>
                        About
                    </p>
                </div>

                <p className='text-xl mt-20'>

                My dream goes beyond innovation for its own sake. It is the fervent desire to use technology as a force for good, to transform lives and create a positive impact on the world. My approach is not just limited to tangible results, but extends to emotional and mental responsibility.                </p>

                <br />
                
                <p className='text-xl'>
                I like to listen to music, my favorite genres are trap, pop and national rock. Sometimes I go trekking on trails because that way I can connect more with nature. I am a vegetarian, I love cooking, I feel like it is my ground wire and it always makes me happy to be able to discover and make a new dish. Current book: the power of now.
                </p>
            </div>
        </div>
    );
};

export default About;