import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
        {/* Texto */}
        <p className="text-sm md:text-base">
          © 2025 Portfolio de Nadia Antonella Ruiz
        </p>

        {/* Íconos sociales */}
        <div className="flex items-center gap-5 text-xl">
          <a
            href="https://www.linkedin.com/in/antoruizx/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/antoruizx"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/5493814988682"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500 transition-colors duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
