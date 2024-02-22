import React from 'react';
import '../styles/SocialLinks2.css';

const SocialLinks2 = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    <ion-icon name="logo-whatsapp" size={30}></ion-icon>
                </>
            ),
            href: 'https://www.linkedin.com/in/antoruizx/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    <ion-icon name="logo-facebook"></ion-icon>
                </>
            ),
            href: 'https://github.com/antoruizx',
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </>
            ),
            href: 'https://github.com/antoruizx',
            style: 'rounded-tr-md'
        },
        {
            id: 4,
            child: (
                <>
                    <ion-icon name="logo-github"></ion-icon>
                </>
            ),
            href: 'https://github.com/antoruizx',
            style: 'rounded-tr-md',
        },
    ];
  return (
    <div className='hidden lg:flex flex-col top-[35%] right-0 fixed'>
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={'p-1.5' +
                            " " +
                            style
                        }
                    >
                        <a href={href}
                            className='flex justify-between items-center w-full text-white'
                            target='_blank'
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
  );
};

export default SocialLinks2;