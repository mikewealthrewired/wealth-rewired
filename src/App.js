import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Wealth Rewired</h1>
        <p className="text-xl max-w-xl mx-auto">
          Break free from limiting money beliefs, rewire your mindset, and build lasting
          financial confidence—because real wealth starts in the mind.
        </p>
      </section>

      <section className="space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold">About</h2>
        <p>
          I’m Mike Torres—firefighter, financial coach, and the founder of Wealth Rewired.
          I created this platform to help people like you uncover and rewrite the hidden
          money scripts holding you back.
        </p>
      </section>

      <section className="space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold">How It Works</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Awareness:</strong> Identify the hidden beliefs driving your financial habits</li>
          <li><strong>Reprogramming:</strong> Replace limiting scripts with empowering money stories</li>
          <li><strong>Action:</strong> Build habits and systems to support your new financial identity</li>
        </ul>
      </section>

      <section className="space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <form name="contact" method="POST" data-netlify="true" className="space-y-4">
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label className="block">Name</label>
            <input type="text" name="name" required className="w-full p-2 border border-gray-300 rounded" />
          </div>

          <div>
            <label className="block">Email</label>
            <input type="email" name="email" required className="w-full p-2 border border-gray-300 rounded" />
          </div>

          <div>
            <label className="block">Message</label>
            <textarea name="message" rows="4" required className="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
// Trigger redeploy on Netlify
