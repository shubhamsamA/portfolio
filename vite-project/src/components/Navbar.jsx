import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Home, Briefcase, Mail, Github } from "lucide-react";
import {FaUserTie,FaLaptopCode} from "react-icons/fa";

import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <>
     
      <nav className="md:fixed w-full top-0 z-50 flex items-center justify-between px-4 md:px-8 py-2 bg-transparent">
        
        
      <div className="w-full sm:flex sm:justify-center md:hidden text-center sm:mb-0 sm:mt-[-10px]">
  <Link 
    to="home" 
    smooth={true} 
    duration={500} 
    className="font-[600] text-[36px] leading-[42px] text-[rgb(250,250,250)] font-mono text-center mb-0"
    style={{ fontFamily: 'Monaco, Consolas, "Lucida Console", monospace' }}
  >
    iNTsam
  </Link>
</div>





        
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-blue-600 px-12 py-3 rounded-full shadow-lg z-50 hidden md:flex">
          <div className="flex justify-between items-center gap-x-12">
            <NavLink to="home" icon={<Home size={24} />} />
            <NavLink to="appleCardsCarouselDemo" icon={<FaLaptopCode size={24} />} />
            <NavLink to="about" icon={<FaUserTie size={24} />} />
            <NavLink to="contact" icon={<Mail size={24} />} />
            <a href="https://github.com/shubhamsamA" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out">
              <Github size={24} />
            </a>
          </div>
        </div>
      </nav>

     
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-blue-600 w-[90%] max-w-md p-4 rounded-full shadow-2xl flex justify-around items-center z-50 md:hidden border border-white/20"
      >
        <DockNavLink to="home" icon={<Home size={24} />} />
        <DockNavLink to="appleCardsCarouselDemo" icon={<FaLaptopCode size={24} />} />
        <DockNavLink to="about" icon={<FaUserTie size={24} />} />
        <DockNavLink to="contact" icon={<Mail size={24} />} />
        <a href="https://github.com/shubhamsamA" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-blue-400 transition-all duration-300 ease-in-out">
          <Github size={24} />
          <span className="text-xs">GitHub</span>
        </a>
      </motion.div>
    </>
  );
}


const NavLink = ({ to, icon }) => (
  <Link 
    to={to} 
    smooth={true} 
    duration={500} 
    className="hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out"
  >
    {icon}
  </Link>
);


const DockNavLink = ({ to, icon }) => (
  <Link 
    to={to} 
    smooth={true} 
    duration={500} 
    className="flex flex-col items-center hover:text-blue-400 transition-all duration-300 ease-in-out"
  >
    {icon}
  </Link>
);