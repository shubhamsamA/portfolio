import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Raw from "../Raw"; // Animated background component
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiCplusplus, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { Eye } from "lucide-react";
import { Link } from "react-scroll";

export default function Homes() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      ref={containerRef}
      className="relative md:h-screen sm:h-screens w-screen text-white flex flex-col items-center text-center sm:items-start sm:text-left justify-center px-6 sm:px-12 md:px-20 lg:px-32 mx-auto overflow-hidden">
      <div className="absolute inset-0 h-screen z-10 w-screen">
        <Raw />
      </div>

      <motion.div className="relative z-10 max-w-full lg:max-w-5xl  " style={{ y: yText }}>
        <motion.h1
          className="text-2xl sm:text-4xl  md:text-6xl sm:mt-7 lg:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I&apos;m Shubham Kumar
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          Full-Stack Developer | DSA Logical Thinker | Tech Explorer
        </motion.p>

        <motion.div
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:w-2/3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        >
          <p className="text-sm sm:text-base md:text-lg">
            <strong>Full-Stack Developer</strong> | <strong>CSSE </strong>
            Passionate about <strong>scalable web apps</strong>, seamless <strong>UX</strong>, and cracking <strong>DSA</strong> challenges.
            Tech Stack: <strong>Next.js,React.js, Node.js, MongoDB, C++</strong>.
          </p>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          className="flex justify-self-auto gap-6 text-gray-400 text-3xl sm:text-4xl mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
        >
          <SiNextdotjs className="hover:text-black dark:hover:text-white transition-all duration-300" title="Next.js" />
          <FaReact className="hover:text-blue-500 transition-all duration-300" title="React.js" />
          <FaNodeJs className="hover:text-green-500 transition-all duration-300" title="Node.js" />
          <SiMongodb className="hover:text-green-400 transition-all duration-300" title="MongoDB" />
          <SiTailwindcss className="hover:text-blue-400 transition-all duration-300" title="Tailwind CSS" />
          <FaDatabase className="hover:text-yellow-500 transition-all duration-300" title="MySQL" />
          <SiCplusplus className="hover:text-blue-600 transition-all duration-300" title="C++" />
          <SiPostgresql className="hover:text-[#336791] transition-all duration-300"title="PostgreSQL"/>
        </motion.div>

        {/* Resume View & Download Buttons */}
        <motion.div
          className="flex gap-4 mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, ease: "easeOut" }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"


            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
          >
            <Eye size={18} />
            Resume
          </a>

        
            <a href="mailto:shubham320749@gmail.com">
            <FaEnvelope  className=" flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-800 text-white font-semibold rounded-lg hover:cursor-pointer" />
          </a>
        
        </motion.div>
      </motion.div>
    </div>
  );
}
