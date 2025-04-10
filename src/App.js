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

      {/* Services */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
              <input type="text" name="name" required className="w-full border px-4 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
              <input type="email" name="email" required className="w-full border px-4 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="message">Message</label>
              <textarea name="message" rows="4" required className="w-full border px-4 py-2 rounded"></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-gray-100">
        © {new Date().getFullYear()} Wealth Rewired. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
