import React from "react";

export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6 text-indigo-700">Get in Touch</h2>
      <p className="text-lg text-gray-700 mb-8">
        Have a question or want to connect? Fill out the form below and I'll respond personally!
      </p>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="space-y-6 text-left"
      >
        <input type="hidden" name="form-name" value="contact" />
        
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full border rounded px-4 py-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-indigo-700 text-white px-6 py-2 rounded hover:bg-indigo-800"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
