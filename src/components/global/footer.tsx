import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t-4 border-blue-500 bg-white text-blue-600 py-4 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Social Links */}
        <div className="flex space-x-4 mb-2 md:mb-0">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-pink-400 transition-all"
          >
            <FaInstagram className="text-2xl md:text-3xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-all"
          >
            <FaLinkedin className="text-2xl md:text-3xl" />
          </a>
          <a
            href="mailto:team.ardra@example.com"
            className="text-blue-500 hover:text-red-500 transition-all"
          >
            <FaEnvelope className="text-2xl md:text-3xl" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-black transition-all"
          >
            <FaGithub className="text-2xl md:text-3xl" />
          </a>
        </div>

        {/* Right Section: Text */}
        <div className="text-center md:text-right">
          <p className="text-sm md:text-base font-sans font-medium">
            Made with ❤️ by Team Ardra - 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
