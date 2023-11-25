import React from 'react';

const About = () => {
    return (
        <div
        name='about'
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white '
        >
            <div
            className='ml-14 max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'
            >
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'
                    >
                        About
                    </p>
                </div>

                <p className='text-xl mt-20'>
                I have always had an interest in technological advancement, I long to be able to improve people's quality of life and raise awareness in the world. I am proactive and committed to my goals and objectives, at the same time, I have an objective and analytical vision when looking for solutions and contributing ideas.
                </p>

                <br />
                
                <p className='text-xl'>
                    // i love read... hobbies in gral.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsa quam magni id eum, minima, ratione repellat ab accusamus dolorem vitae repellendus nemo inventore quia tempora at quidem repudiandae obcaecati.
                </p>
            </div>
        </div>
    )
}

export default About;