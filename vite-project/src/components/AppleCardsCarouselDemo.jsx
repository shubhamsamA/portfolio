
import { Carousel, Card } from "../components/Carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-center text-xl md:text-5xl font-bold text-gray-100 dark:text-neutral-200 font-sans">
        MY PROJECTS
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



const data = [
 {
  category: "Moment",
  title: "Capture the Moment — Your story, your way",
  src: "/images/moment.gif",
  content: (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        Capture, Reflect, Grow
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        <strong>Moment Journal</strong> is a personal journaling web app designed to help users capture, organize,
        and reflect on their daily thoughts and moments. With a clean, intuitive interface, it allows users to
        write entries, tag moods, and revisit past memories. Built with modern web technologies, it emphasizes
        privacy, simplicity, and mindfulness.
      </p>

      <img
        src="/images/start.png"
        alt="Moment Journal Entry View"
        className="w-full h-auto max-h-130 object-cover rounded-lg mb-6 mt-4"
      />

      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tech Stack:</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
          <li><strong className="text-blue-500">Next.js:</strong> Dynamic and interactive frontend.</li>
          <li><strong className="text-yellow-500">PostgreSQL:</strong> Stores user data via Prisma ORM.</li>
          <li><strong className="text-purple-500">Clerk:</strong> Provides secure user authentication and session management.</li>
          <li><strong className="text-red-500">Arcjet.js:</strong> Bot protection and request shielding.</li>
        </ul>
      </div>

      <img
        src="/images/dashboard.png"
        alt="Moment Journal Dashboard Preview"
        className="w-full h-auto max-h-130 object-cover rounded-lg mb-6 mt-4"
      />

      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white"> Key Features:</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
          <li> Seamlessly capture daily thoughts, emotions, and reflections.</li>
          <li> Tag moods and track emotional patterns over time.</li>
          <li> Secure user sign-in with Clerk .</li>
          <li> Protected with Arcjet.js to block spam, bots, and suspicious activity.</li>
        </ul>
      </div>

      <p className="mt-6 text-gray-700 dark:text-gray-300">
        <strong className="text-green-500">Moment Journal</strong> offers a secure and distraction-free journaling experience.
        By integrating <strong className="text-indigo-500">Clerk</strong> for seamless auth and <strong className="text-indigo-500">Arcjet.js</strong> for bot protection,
        it ensures your entries stay private, safe, and easily accessible only by you.
      </p>
    </div>
  ),
  github: "https://github.com/shubhamsamA/moment",
   website: "https://moment-2l9n.vercel.app/",
  technologies: "Next.js, PostgreSQL",
},

{
  category: "MentR2B",
  title: "AI Career Coach",
  src: "/images/mentr2b.gif",
  content: (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        🎓 MentR2B AI Career Coach
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        <strong className="text-blue-500">MentR2B AI Career Coach</strong> is a web platform designed to enhance career preparation using <strong>Generative AI</strong>. It integrates <strong className="text-purple-500">speech-to-text</strong> and real-time feedback analysis to help users improve interview skills, resume quality, and overall job application readiness.
      </p>

      <a
        href="https://mentr2b.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 mb-6 text-blue-600 dark:text-blue-400 underline font-semibold"
      >
        Visit Website
      </a>

      <img
        src="/images/mentrb1.png"
        alt="MentR2B AI Career Coach"
        className="w-full h-auto max-h-130 object-cover rounded-lg mb-6 mt-4"
      />

      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white"> Tech Stack:</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
          <li><strong className="text-blue-500">Next.js:</strong> Frontend with real-time interactivity and dynamic routing.</li>
          <li><strong className="text-yellow-500">JavaScript:</strong> Core language for frontend and backend logic.</li>
          <li><strong className="text-green-500">Tailwind CSS:</strong> Styling and responsive design for clean UI.</li>
          <li><strong className="text-purple-500">AI APIs:</strong> Powers quizzes, mock interviews, and resume optimization.</li>
        </ul>
      </div>

          <img
        src="/images/mentrb2.png"
        alt="MentR2B AI Career Coach"
        className="w-full h-auto max-h-130 object-cover rounded-lg mb-6 mt-4"
      />

      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white"> Key Features:</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
          <li> AI-powered platform for personalized quizzes and mock interviews.</li>
          <li> Feedback analysis to improve user engagement by 30%.</li>
          <li> AI-driven resume optimization and tailored cover letter generation, reducing manual effort by 50%.</li>
          <li> Used by 500+ users for real-time career preparation.</li>
        </ul>
      </div>

      <p className="mt-6 text-gray-700 dark:text-gray-300">
        MentR2B bridges the gap in career readiness by providing <strong className="text-green-500">personalized, AI-driven guidance</strong> that boosts preparation efficiency and increases job application relevance.
      </p>
    </div>
  ),
  github: "https://github.com/shubhamsamA/mentr2b",
  website: "https://mentr2b.vercel.app/",
  technologies: "Next.js, PostgreSQL",
}
,

  {
    category: "PeaceinMe",
    title: "AI Mental Health Assistant",
    src: "/images/MH.gif",
    content: (
      <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">



        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
           AI Mental Health Assistant
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          The <strong className="text-blue-500">AI Mental Health Assistant</strong> is an advanced web application designed to provide mental health support through <strong>Generative AI</strong>. It leverages <strong className="text-purple-500">Natural Language Processing (NLP)</strong> and AI-driven chatbots to offer real-time emotional support, stress management techniques, and access to mental health resources.
        </p>
        <img
          src="/images/dd.png"
          alt="AI Mental Health Assistant"
          className="w-full h-auto max-h-130 object-cover rounded-lg mb-6 mt-4"
        />


        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tech Stack:</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
            <li><strong className="text-blue-500">React.js:</strong> Dynamic and interactive frontend.</li>
            <li><strong className="text-green-500">Node.js & Express.js:</strong> Handles backend APIs and chatbot interactions.</li>
            <li><strong className="text-yellow-500">MongoDB:</strong> Stores user interactions for personalized experiences.</li>
            <li><strong className="text-purple-500">Gemini API:</strong> Enables AI-powered conversations and sentiment analysis.</li>
          </ul>
        </div>
        <img
          src="/images/sa.png"
          alt="AI Mental Health Assistant"
          className="w-full h-auto max-h-130 object-cover rounded-lg mb-6 mt-4"
        />

        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white"> Key Features:</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
            <li> AI-powered chatbot for emotional well-being support.</li>
            <li> Personalized mental health guidance based on user inputs.</li>
            <li> 24/7 availability for anytime assistance.</li>
            <li> Secure and confidential user data handling.</li>
          </ul>
        </div>

        <p className="mt-6 text-gray-700 dark:text-gray-300">
          This project bridges the gap in mental health accessibility by leveraging AI to provide <strong className="text-green-500">compassionate, anonymous, and always-available assistance.</strong>
        </p>
      </div>
    ),

    github: "https://github.com/shubhamsamA/mentalchatbot",
    technologies: "React.js, Node.js",
  },
];

export default AppleCardsCarouselDemo;
