import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Handle button state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading state

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset state
    } catch (error) {
      alert("Error sending message. Try again!");
      console.error(error);
    }

    setIsSubmitting(false); // Stop loading state
  };

  return (
    <section className="py-8">
      <div className="max-w-screen-md mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-white dark:text-white mb-4">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-white dark:text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white bg-gray-100"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-white dark:text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white bg-gray-100"
              placeholder="Enter your email"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-sm font-medium text-white dark:text-gray-300">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white bg-gray-100"
              placeholder="Enter subject"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-white dark:text-gray-400">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white bg-gray-100"
              placeholder="Type your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 text-white ${
              isSubmitting ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
            } rounded-lg transition duration-300`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
