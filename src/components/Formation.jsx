import React from 'react';
import '../styles/Formation.css';
import { useTranslation } from 'react-i18next';

const Formation = () => {
  const [t, i18n] = useTranslation("global");

  const education = [
    {
      id: 1,
      title: t("formation.bootcamp.title"),
      institution: t("formation.bootcamp.institution"),
      period: t("formation.bootcamp.period"),
      description: t("formation.bootcamp.description"),
      link: "https://drive.google.com/uc?export=download&id=1qLZMppVvccFBmvrX407THo_qxluELiiT",
    },
    {
      id: 2,
      title: t("formation.utn.title"),
      institution: t("formation.utn.institution"),
      period: t("formation.utn.period"),
      description: t("formation.utn.description"),
    },
    {
      id: 3,
      title: t("formation.courses.title"),
      institution: t("formation.courses.institution"),
      period: t("formation.courses.period"),
      description: t("formation.courses.description"),
      link: "https://drive.google.com/file/d/1gfyEJbzgCxKtU1MylcxWXhWMlETlxJYh/view",
    },
  ];

  return (
    <div
      name='formation'
      className='w-full bg-gradient-to-b from-black to-gray-800 text-white py-20'
    >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='text-center pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-purple-700'>
            {t("formation.title")}
          </p>
          <p className='text-gray-300 mt-4'>
            {t("formation.subtitle")}
          </p>
        </div>

        <div className='space-y-10'>
          {education.map(({ id, title, institution, period, description, link }) => (
            <div
              key={id}
              className='flex flex-col md:flex-row justify-between items-start md:items-center border-l-4 border-purple-700 pl-4'
            >
              <div className='md:w-4/5'>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='text-gray-300 italic'>{institution}</p>
                <p className='text-gray-400 text-sm mb-2'>{period}</p>
                <p className='text-gray-200'>{description}</p>
              </div>

              {link && (
                <a
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-4 md:mt-0 md:ml-6 bg-purple-700 hover:bg-purple-800 text-white font-medium px-5 py-2 rounded-lg transition duration-300 ease-in-out'
                >
                  {t("formation.button")}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Formation;
