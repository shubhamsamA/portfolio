import { motion } from "framer-motion";
import { FaClipboardList, FaLaptopCode, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    
    <div className="max-w-4xl mx-auto p-6 text-gray-300">
      <div className="mt-12">
  <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6"> Work Experience</h2>

<div className="relative border-l-2 border-gray-500 ml-4 space-y-6">
  {/* Internship */}
  <div className="relative pl-6">
    <span className="absolute -left-3 top-2 w-4 h-4 bg-white rounded-full border-2 border-gray-500"></span>
    <h3 className="text-xl font-semibold text-white">
      Full Stack Developer Intern
    </h3>
    <p className="text-sm text-gray-300">
      Visafu Technologies • May 2025 – July 2025 (Hybrid)
    </p>

    <ul className="list-disc list-inside mt-2 text-gray-200 space-y-1">
      <li>Developed end-to-end features for an internal asset management system using the MERN stack.</li>
      <li>Created modular and responsive React.js components for dashboards and tracking interfaces.</li>
      <li>Designed and integrated RESTful APIs with Node.js and Express.js for asset movement tracking.</li>
      <li>Implemented scalable database schemas with MongoDB and Mongoose.</li>
      <li>Styled UI with Tailwind CSS, ensuring responsiveness and consistent dark/light mode support.</li>
      <li>Collaborated with cross-functional teams in Agile sprints, using Git and GitHub for version control.</li>
    </ul>
  </div>

  {/* Freelance */}
  <div className="relative pl-6">
    <span className="absolute -left-3 top-2 w-4 h-4 bg-white rounded-full border-2 border-gray-500"></span>
    <h3 className="text-xl font-semibold text-white">
      Freelance Full Stack Developer
    </h3>
    <p className="text-sm text-gray-300">
      Signature Factor • August 2025 (Remote)
    </p>

    <ul className="list-disc list-inside mt-2 text-gray-200 space-y-1">
      <li>
        Developed a full-stack e-commerce platform (
        <a
          href="https://sfgifts.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          sfgifts.in
        </a>
        ) using Next.js App Router.
      </li>
      <li>Integrated Clerk authentication with secure role-based admin access, ensuring protected features.</li>
      <li>Implemented PostgreSQL (Neon) with Prisma ORM, reducing query errors by 30%.</li>
      <li>Optimized application load speed by 25% through code splitting and caching strategies.</li>
      <li>Collaborated with two developers to deliver modular UI and category/product features, cutting dev time by 20%.</li>
    </ul>
  </div>
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
