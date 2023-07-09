import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500
     via-purple-500 to-pink-500 mt-10 w-full bottom-0 relative ">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-white text-sm text-center sm:text-left">© 2023 My E-Commerce Store —
          <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-800 ml-1" target="_blank">@magdy22</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a href="https://www.facebook.com" className="text-white">
            <FaFacebook className="w-6 h-6 mx-3" />
          </a>
          <a href="https://www.twitter.com" className="text-white">
            <FaTwitter className="w-6 h-6 mx-3" />
          </a>
          <a href="https://www.instagram.com" className="text-white">
            <FaInstagram className="w-6 h-6 mx-3" />
          </a>
          <a href="https://www.linkedin.com" className="text-white">
            <FaLinkedin className="w-6 h-6 mx-3" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;