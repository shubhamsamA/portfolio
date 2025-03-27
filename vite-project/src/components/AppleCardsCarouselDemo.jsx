import React from "react";
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
    category: "PeaceinMe",
    title: "AI Mental Health Assistant",
    src: "/images/MH.gif",
    content: (
      <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
       
        
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          🧠 AI Mental Health Assistant
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
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">🛠 Tech Stack:</h3>
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
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">✨ Key Features:</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
            <li>🤖 AI-powered chatbot for emotional well-being support.</li>
            <li>🎯 Personalized mental health guidance based on user inputs.</li>
            <li>⏳ 24/7 availability for anytime assistance.</li>
            <li>🔒 Secure and confidential user data handling.</li>
          </ul>
        </div>
    
        <p className="mt-6 text-gray-700 dark:text-gray-300">
          This project bridges the gap in mental health accessibility by leveraging AI to provide <strong className="text-green-500">compassionate, anonymous, and always-available assistance.</strong>
        </p>
      </div>
    ),
    
    github:"https://github.com/shubhamsamA/mentalchatbot",
    technologies:"React.js, Node.js",
  },
  {
    category: "Plant Disease Detection",
    title: "Plant Disease Detection",
    
    src:"/images/pd.gif",
    content: (
      <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          🌱 Plant Disease Detection
        </h2>
        
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          A deep learning-powered web application designed to assist farmers and researchers in identifying plant diseases with high accuracy. Utilizing <strong className="text-blue-500">Convolutional Neural Networks (CNNs)</strong>, the model efficiently classifies diseases from plant leaf images.
        </p>
        <img 
          src="/images/pd.png" 
          alt="Plant Disease Detection" 
          className="w-full h-auto max-h-130 object-cover rounded-lg mb-6 mt-4"
        />
        
    
        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">🛠 Tech Stack:</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
            <li><strong className="text-green-500">Flask:</strong> Lightweight Python web framework for deployment.</li>
            <li><strong className="text-yellow-500">TensorFlow & Keras:</strong> Powering the AI-based disease detection.</li>
            <li><strong className="text-red-500">OpenCV:</strong> Enhances image preprocessing and accuracy.</li>
            <li><strong className="text-blue-500">React.js:</strong> Provides an interactive and seamless frontend.</li>
          </ul>
        </div>
    
        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">✨ Key Features:</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
            <li>🚀 AI-powered disease classification with high precision.</li>
            <li>📸 Upload plant leaf images for instant diagnosis.</li>
            <li>💡 Provides treatment recommendations based on disease.</li>
            <li>⚡ Fast, lightweight, and mobile-responsive UI.</li>
          </ul>
        </div>
    
        <p className="mt-6 text-gray-700 dark:text-gray-300">
          This project aims to enhance <strong className="text-green-500">agricultural productivity</strong> by offering an AI-driven solution for early disease detection, reducing crop losses, and improving yield quality.
        </p>
      </div>
    ),
    
    github:"https://github.com/shubhamsamA/PlantDiseaseDetection",
    technologies:"Flask, TensorFlow",
  },
];

export default AppleCardsCarouselDemo;
