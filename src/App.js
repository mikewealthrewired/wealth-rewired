import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-5xl font-extrabold mb-4">Wealth Rewired</h1>
        <p className="text-xl max-w-xl mx-auto">
          Rewire your money mindset and build lasting confidence—because real wealth starts in the mind.
        </p>
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

      {/* Call-to-Action */}
      <section className="py-20 bg-indigo-700 text-white text-center" id="contact">
        <h2 className="text-3xl font-bold mb-4">Ready to Rewire Your Wealth?</h2>
        <p className="mb-6 text-lg">Start your journey toward financial clarity today.</p>
        <a
          href="#contact"
          className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Get in Touch
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
