import React from "react";
import GuidedVisualizationForm from "./Components/GuidedVisualizationForm";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-5xl font-extrabold mb-4">Wealth Rewired</h1>
        <p className="text-xl max-w-xl mx-auto">
          Rewire your money mindset and build lasting confidence—because real wealth starts in the mind.
        </p>
        <a href="#guided-visualization" className="mt-6 inline-block text-white underline text-lg font-semibold">
          Try the Guided Visualization Exercise
        </a>
      </header>

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-lg text-gray-700">
            I'm Mike Torres—firefighter, financial coach, and the founder of Wealth Rewired.
            I created this platform to help people uncover and rewrite the hidden money scripts holding them back.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6" id="services">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <a href="#coaching" className="shadow-lg p-6 rounded-xl border hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">1:1 Coaching</h3>
            <p>Get personalized help to rewire your financial mindset and behaviors.</p>
          </a>
          <a href="#workshops" className="shadow-lg p-6 rounded-xl border hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Workshops</h3>
            <p>Group sessions to guide you through financial identity transformation.</p>
          </a>
          <a href="#resources" className="shadow-lg p-6 rounded-xl border hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Resources</h3>
            <p>Access tools, scripts, and templates to support your rewiring journey.</p>
          </a>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 px-6 bg-gray-50 text-gray-800" id="who">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Who It's For</h2>
          <p className="text-lg mb-8">
            Wealth Rewired is built for people who know they’re capable of more—but feel like something is holding them back.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left text-gray-700">
            <div>
              <h3 className="text-xl font-semibold mb-2">This is for you if...</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>You’ve said “I’m not good with money” more than once.</li>
                <li>You’ve tried budgeting, but it never sticks.</li>
                <li>You feel anxious, guilty, or avoidant when it comes to money.</li>
                <li>You make decent income but still live paycheck to paycheck.</li>
                <li>You know what to do… but struggle to follow through.</li>
                <li>You’re tired of starting over and want a system that lasts.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What you're looking for...</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Peace and clarity around money—finally.</li>
                <li>A step-by-step process to change the way you think, feel, and act with money.</li>
                <li>A way to grow wealth without relying on willpower or hustle.</li>
                <li>A shift from surviving to building real, lasting abundance.</li>
                <li>To feel confident, in control, and excited about your financial future.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-20 bg-white text-center" id="transformation">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">The Wealth Rewired Transformation</h2>
          <p className="text-lg text-gray-600 mb-12">
            Break free from financial stress and step into a new identity—one rooted in peace, confidence, and lasting wealth.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-red-600 mb-4">Before Wealth Rewired</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Living paycheck to paycheck</li>
                <li>Fearful of money & avoiding finances</li>
                <li>Believing wealth is for the lucky or greedy</li>
                <li>Working harder just to stay afloat</li>
                <li>Relying on willpower to save or invest</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-200">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">After Wealth Rewired</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Automated wealth system in place</li>
                <li>Confidence and clarity with money</li>
                <li>Understanding how to build intentional wealth</li>
                <li>Making money work harder for you</li>
                <li>Effortlessly growing your net worth</li>
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <a
              href="#contact"
              className="inline-block bg-indigo-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-800 transition"
            >
              Start Your Transformation
            </a>
          </div>
        </div>
      </section>

      {/* Guided Visualization Form */}
      <section className="py-20 bg-gray-50" id="guided-visualization">
        <div className="max-w-4xl mx-auto px-6">
          <GuidedVisualizationForm />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-indigo-700 text-white text-center" id="contact">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Rewire Your Wealth?</h2>
          <p className="mb-8 text-lg">Start your journey toward financial clarity today. Drop me a message below.</p>

          <form name="contact" method="POST" data-netlify="true" className="grid gap-6 bg-white text-gray-800 p-8 rounded-xl shadow-md">
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">Name</label>
              <input type="text" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-2">Email</label>
              <input type="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold mb-2">Message</label>
              <textarea name="message" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded"></textarea>
            </div>
            <button type="submit" className="bg-indigo-700 text-white px-6 py-2 rounded hover:bg-indigo-800 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Bonus CTA */}
      <section className="py-16 px-6 bg-blue-100 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Break Free from Financial Stress?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Let’s build your custom wealth system—without overwhelm, confusion, or burnout.
        </p>
        <a
          href="#contact"
          className="inline-block bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-800 transition"
        >
          Book Your Free Strategy Call
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-gray-100">
        © {new Date().getFullYear()} Wealth Rewired. All rights reserved.
      </footer>
    </div>
  );
}

export default App;


