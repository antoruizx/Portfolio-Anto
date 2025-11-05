import React from 'react';
import Reed from '../assets/img/capturareed-r.png';
import Piaceres from '../assets/img/piaceres-2.png';
import RuizAssociates from '../assets/img/ruizassociates.png';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const [t, i18n] = useTranslation("global");

  const portfolios = [
    {
      id: 1,
      src: Piaceres,
      link: 'https://piaceres-resto.vercel.app/',
      title: 'Piaceres',
      description: t("portfolio.piaceresDesc"),
    },
    {
      id: 2,
      src: Reed,
      link: 'https://reed-project-gilt.vercel.app/',
      title: 'Reed',
      description: t("portfolio.reedDesc"),
    },
    {
      id: 3,
      src: RuizAssociates,
      link: 'https://ruizxasociados.vercel.app/',
      title: 'Ruiz & Associates',
      description: t("portfolio.ruizDesc"),
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div id="portfolio-container" className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-purple-700">
            {t('portfolio.title')}
          </p>
          <p className="py-6 mb-10">{t('portfolio.body')}</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-0 mb-40">
          {portfolios.map(({ id, src, link, title, description }) => (
            <div
              key={id}
              className="bg-gradient-to-b from-gray-900 to-gray-800 shadow-md shadow-gray-700 rounded-xl overflow-hidden hover:scale-105 duration-300 flex flex-col"
            >
              <img
                src={src}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="flex-1 p-6 pb-8 flex flex-col items-center justify-between">
                <div className="mb-4">
                  <p className="text-center font-bold text-lg mb-2">{title}</p>
                  <p className="text-sm text-gray-300 text-center">{description}</p>
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition-colors"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
