import React from "react";

export default function Contact() {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form className="space-y-4 max-w-md">
        <input className="w-full border rounded px-4 py-2" type="text" placeholder="Your Name" />
        <input className="w-full border rounded px-4 py-2" type="email" placeholder="Your Email" />
        <textarea className="w-full border rounded px-4 py-2" rows="4" placeholder="Message" />
        <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">Send</button>
      </form>
    </section>
  );
}
