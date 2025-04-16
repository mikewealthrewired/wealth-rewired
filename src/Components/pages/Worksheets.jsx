import React from "react";

export default function Worksheets() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6">Worksheets</h1>
      <p className="text-center text-lg mb-10">
        These tools are designed to help you uncover patterns, reframe your beliefs, and take real action on your financial journey.
      </p>

      {/* Awareness Worksheets */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">📍 Phase 1: Awareness</h2>
        <ul className="space-y-4">
          <li className="bg-white shadow-md p-4 rounded">
            <h3 className="font-bold">Money Story Reflection</h3>
            <p>Explore your earliest memories around money and how they influence your decisions today.</p>
          </li>
          <li className="bg-white shadow-md p-4 rounded">
            <h3 className="font-bold">Money Script Discovery</h3>
            <p>Identify and name the financial beliefs that are currently shaping your behavior.</p>
          </li>
        </ul>
      </section>

      {/* Reprogramming Worksheets */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🧠 Phase 2: Reprogramming</h2>
        <ul className="space-y-4">
          <li className="bg-white shadow-md p-4 rounded">
            <h3 className="font-bold">Financial Affirmation Builder</h3>
            <p>Craft personal mantras to shift from scarcity to abundance thinking.</p>
          </li>
          <li className="bg-white shadow-md p-4 rounded">
            <h3 className="font-bold">Scarcity-to-Abundance Journal</h3>
            <p>7-day journaling challenge to rewire your subconscious money beliefs.</p>
          </li>
        </ul>
      </section>

      {/* Tools Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🛠️ Printable Tools</h2>
        <ul className="space-y-4">
          <li className="bg-white shadow-md p-4 rounded">
            <h3 className="font-bold">Budget Snapshot Template</h3>
            <p>Start with a simple look at your income and expenses—no spreadsheets required.</p>
          </li>
          <li className="bg-white shadow-md p-4 rounded">
            <h3 className="font-bold">Wealth Thermostat Tracker</h3>
            <p>Monitor your financial comfort zone and learn when you're self-sabotaging.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
