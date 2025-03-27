import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className=" text-white py-8 mt-10 relative">
      

        <p className="text-sm text-white text-center ">
          © {new Date().getFullYear()} 
          &nbsp; Made with React.js &  by Shubham Kumar.
        </p>
       

        
        <ul className="flex space-x-6 text-sm justify-center mt-4 hover:cursor-pointer">
          <li>
            <Link to="home" smooth={true} duration={500}>
                Home
            </Link>

          </li>
          <li>
            <Link to="appleCardsCarouselDemo" smooth={true} duration={500}>
                Projects
            </Link>

          </li>
            <li>
            <Link to="contact" smooth={true} duration={500}>
                Contact
            </Link>
            </li>
        </ul>

        {/* Right Section - Social Media Icons */}
        <div className="flex space-x-5 justify-center mt-4">
          <a href="https://www.linkedin.com/in/shubham-kumar-260a9a279/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-110" />
          </a>
          <a href="https://github.com/shubhamsamA" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-gray-400 transition-all duration-300 ease-in-out transform hover:scale-110" />
          </a>
          <a href="mailto:shubham320749@gmail.com">
            <FaEnvelope className="text-xl hover:text-red-500 transition-all duration-300 ease-in-out transform hover:scale-110" />
          </a>
        </div>
  

      {/* Space for Dock (Extra Padding at Bottom) */}
      <div className="h-15 md:h-15"></div>
    </footer>
  );
}
