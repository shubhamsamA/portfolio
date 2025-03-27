import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaCogs, FaClipboardList, FaLaptopCode, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-300">
      {/* Title Section */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        About Me
      </motion.h2>

      {/* Description Section */}
      <motion.p
        className="text-lg sm:text-xl text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        I'm <strong>Shubham Kumar</strong>, a passionate{" "}
        <strong>Full-Stack Developer</strong> with expertise in{" "}
        <strong>React.js, Node.js, MongoDB, and C++</strong>. Currently pursuing{" "}
        <strong>B.Tech in Computer Science & Systems Engineering</strong> at{" "}
        <strong>KIIT University</strong>. I love building{" "}
        <strong>scalable web applications</strong> and solving{" "}
        <strong>complex DSA challenges</strong>.
      </motion.p>


      {/* Skills Section */}
     {/* Skills Section */}
<div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
  {[
    { icon: <FaReact size={30} />, label: "React.js" },
    { icon: <FaNodeJs size={30} />, label: "Node.js" },
    { icon: <FaDatabase size={30} />, label: "MongoDB" },
    { icon: <FaCode size={30} />, label: "C++" },
    { icon: <FaCogs size={30} />, label: "Problem Solving" },
    { icon: <FaNodeJs size={30} />, label: "Express.js" }, // Added Express.js here
  ].map((skill, index) => (
    <motion.div
      key={index}
      className="p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 * index, duration: 0.6 }}
    >
      <div className="flex flex-col items-center">
        {skill.icon}
        <span className="mt-2 text-sm sm:text-base">{skill.label}</span>
      </div>
    </motion.div>
  ))}
</div>

      {/* Quick Facts */}
      <div className="mt-12">
        <motion.h3
          className="text-2xl font-semibold text-center text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Quick Facts About Me
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            "🚀 Built 10+ projects in React & Node.js",
            "🧑‍💻 Solved 100+ DSA problems",
            "⚡ Passionate about AI & Web Development",
            "📚 Love reading tech blogs & books",
            "💡 Always curious to learn new tech",
            
        ].map((fact, index) => (
            <motion.div
              key={index}
              className="p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              {fact}
            </motion.div>
          ))}
        </div>
      </div>

      {/* How I Work on Client Projects */}
      <motion.h3
        className="text-2xl font-semibold text-center text-white mt-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        How I Work on Projects
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        {[
          {
            icon: <FaClipboardList size={30} className="text-blue-400" />,
            title: "Planning & Research",
            desc: "Understanding client requirements, market research, and project planning.",
          },
          {
            icon: <FaLaptopCode size={30} className="text-green-400" />,
            title: "Development & Testing",
            desc: "Building, testing, and optimizing the application for performance.",
          },
          {
            icon: <FaRocket size={30} className="text-yellow-400" />,
            title: "Launch & Maintenance",
            desc: "Deploying the project and providing long-term support and updates.",
          },
        ].map((step, index) => (
          <motion.div
            key={index}
            className="p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <div className="flex flex-col items-center">
              {step.icon}
              <h4 className="mt-2 text-lg font-semibold">{step.title}</h4>
              <p className="text-sm text-gray-400 text-center">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
        >
          View Resume
        </a>
      </motion.div>
    </div>
  );
};

export default About;
