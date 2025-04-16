// src/Components/pages/StartHere.jsx
import React from "react";

export default function StartHere() {
  return (
    <div className="p-8 text-gray-800 font-sans">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">Welcome to Wealth Rewired</h1>

      <p className="max-w-3xl mx-auto mb-6 text-lg text-center">
        Whether you’re stuck living paycheck to paycheck or just want to feel confident with your money, you’re in the right place.
        This is your starting line — let’s build a new financial identity together.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mt-10">
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <h2 className="font-bold text-xl mb-2">🔍 Phase 1: Awareness</h2>
          <p>Discover your money story and current financial scripts.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <h2 className="font-bold text-xl mb-2">🧠 Phase 2: Reprogramming</h2>
          <p>Start replacing fear or scarcity with clarity and confidence.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <h2 className="font-bold text-xl mb-2">💡 Tools + Worksheets</h2>
          <p>Use simple, science-backed tools to build wealth habits that stick.</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="#contact"
          className="bg-indigo-600 text-white px-6 py-3 rounded shadow hover:bg-indigo-700 transition"
        >
          Get Started with a Free Call
        </a>
      </div>
    </div>
  );
}
