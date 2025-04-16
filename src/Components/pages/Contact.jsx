import React from "react";

export default function Contact() {
  return (
    <section className="py-16 px-6 bg-gray-50 text-center" id="contact">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Let’s Connect</h2>
        <p className="text-lg text-gray-600 mb-8">
          Have a question or want to work together? Fill out the form below and I’ll get back to you.
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="grid gap-4 text-left"
        >
          {/* Netlify Hidden Inputs */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
          </p>

          <label className="block">
            <span className="text-gray-700">Name</span>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded px-4 py-2"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded px-4 py-2"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Message</span>
            <textarea
              name="message"
              required
              rows="5"
              className="mt-1 block w-full border border-gray-300 rounded px-4 py-2"
            ></textarea>
          </label>

          <button
            type="submit"
            className="bg-indigo-700 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
