import React from 'react';
import '../styles/Formation.css';
import { useTranslation } from 'react-i18next';

const Formation = () => {
  const [t, i18n] = useTranslation("global");

  const education = [
    {
      id: 1,
      title: "Bootcamp AWS DevOps",
      institution: "Globant - Desafío LATAM",
      period: "2025",
      description:
        "Bootcamp intensivo enfocado en infraestructura en la nube, CI/CD y automatización con AWS. Curso aprobado con certificación oficial.",
      link: "https://drive.google.com/file/d/1zv37spQAcObQjkuSW8IQfmjdBu0ALSdO/view",
    },
    {
      id: 2,
      title: "Tecnicatura Universitaria en Programación",
      institution: "Universidad Tecnológica Nacional (UTN)",
      period: "2024 - Actualidad",
      description:
        "Formación integral que incluye conocimientos en programación y bases de datos con Python, C#, SQL, MySQL, MongoDB, JavaScript y React, junto con el estudio de la historia y estructura de la programación y el desarrollo del inglés técnico.",
      link: "",
    },
    {
      id: 3,
      title: "Fullsyack Web Developer",
      institution: "Universidad Tecnológica Nacional (UTN)",
      period: "2023",
      description:
        "Formación integral en desarrollo web full stack, con proyectos prácticos utilizando React, Node.js, Express y MongoDB.",
      link: "https://drive.google.com/file/d/1gfyEJbzgCxKtU1MylcxWXhWMlETlxJYh/view",
    },
  ];

  return (
    <div
      name="formation"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white pt-20 pb-40"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Título y descripción centrados */}
        <div id="formation-container" className="text-center">
          <p className="text-4xl font-bold inline border-b-4 border-purple-700">
            Formación
          </p>
          <p className="py-6 mb-10 text-gray-300 max-w-2xl mx-auto">
            Estas son las formaciones que me ayudaron a construir una base sólida en desarrollo y a potenciar mis habilidades técnicas.
          </p>
        </div>

        {/* Lista de formaciones */}
        <div className="space-y-8">
          {education.map(({ id, title, institution, period, description, link }) => (
            <div
              key={id}
              className="border-l-4 border-purple-700 pl-4 flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="sm:w-3/4">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-gray-300 italic">{institution}</p>
                <p className="text-gray-400 text-sm mb-2">{period}</p>
                <p className="text-gray-200">{description}</p>
              </div>

              {/* Botón de certificado */}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 sm:mt-0 inline-block bg-gradient-to-b from-purple-600 to-purple-900 text-white px-4 py-2 rounded-md hover:scale-105 transition-transform duration-300"
                >
                  Ver certificado
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
