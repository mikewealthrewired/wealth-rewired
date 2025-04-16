// src/Components/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="text-white text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Rewire your money mindset and build lasting confidence—
        </h1>
        <p className="text-xl">because real wealth starts in the mind.</p>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 text-center py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="max-w-3xl mx-auto text-lg">
          I'm Mike Torres—firefighter, financial coach, and the founder of Wealth Rewired. 
          I created this platform to help people uncover and rewrite the hidden money scripts 
          holding them back.
        </p>
      </section>

      {/* Services Section */}
      <section className="flex flex-col md:flex-row justify-center gap-6 py-10 px-4 bg-white">
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3 text-center">
          <h3 className="font-bold text-xl mb-2">1:1 Coaching</h3>
          <p>Get personalized help to rewire your financial mindset and behaviors.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3 text-center">
          <h3 className="font-bold text-xl mb-2">Workshops</h3>
          <p>Group sessions to guide you through financial identity transformation.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3 text-center">
          <h3 className="font-bold text-xl mb-2">Resources</h3>
          <p>Access tools, scripts, and templates to support your rewiring journey.</p>
        </div>
      </section>
    </div>
  );
}
