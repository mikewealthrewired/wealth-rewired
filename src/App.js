import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
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

      {/* Services or Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="shadow-lg p-6 rounded-xl border">
            <h3 className="text-xl font-semibold mb-2">1:1 Coaching</h3>
            <p>Get personalized help to rewire your financial mindset and behaviors.</p>
          </div>
          <div className="shadow-lg p-6 rounded-xl border">
            <h3 className="text-xl font-semibold mb-2">Workshops</h3>
            <p>Group sessions to guide you through financial identity transformation.</p>
          </div>
          <div className="shadow-lg p-6 rounded-xl border">
            <h3 className="text-xl font-semibold mb-2">Resources</h3>
            <p>Access tools, scripts, and templates to support your rewiring journey.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Rewire Your Wealth?</h2>
        <p className="mb-6 text-lg">Start your journey toward financial clarity today.</p>
        <a href="#contact" className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
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
