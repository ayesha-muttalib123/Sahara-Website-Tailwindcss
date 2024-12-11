'use client';  // Add this line to mark the component as a Client Component

import React, { useState } from 'react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message Sent!');
    // Here you would typically send the data to a server
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Navbar />
          <div className="max-w-4xl mx-auto p-6 sm:p-12 mt-10 bg-gray-50 text-center rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-10">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-8">We would love to hear from you! Please fill out the form below.</p>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="p-3 border border-gray-300 rounded-lg text-base w-full max-w-lg mx-auto focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-3 border border-gray-300 rounded-lg text-base w-full max-w-lg mx-auto focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="p-3 border border-gray-300 rounded-lg text-base w-full max-w-lg mx-auto focus:outline-none focus:ring-2 focus:ring-orange-500 resize-y h-36"
              ></textarea>
              <button
                type="submit"
                className="p-3 bg-orange-500 text-white rounded-lg text-base font-semibold hover:bg-orange-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="bg-gray-100 py-8">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
