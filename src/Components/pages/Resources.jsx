// src/Components/pages/Resources.jsx
import React from "react";

export default function Resources() {
  return (
    <div className="p-8 text-gray-800 font-sans">
      <h1 className="text-4xl font-bold mb-6 text-center">Resources</h1>
      <p className="text-lg text-center mb-10">
        Explore tools, templates, and curated content to help you rewire your finances and build lasting wealth.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Financial Identity Toolkit</h2>
          <p className="mb-4">
            Discover worksheets and scripts to help you understand and transform your financial identity.
          </p>
          <a href="#worksheets" className="text-indigo-600 underline font-semibold">
            Explore Worksheets →
          </a>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Guided Visualizations</h2>
          <p className="mb-4">
            Access interactive exercises designed to shift your mindset and align your actions with wealth-building goals.
          </p>
          <a href="#visualization" className="text-indigo-600 underline font-semibold">
            Try Visual Tools →
          </a>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Money Mindset Articles</h2>
          <p className="mb-4">
            Read up on topics like breaking scarcity beliefs, creating new habits, and finding financial peace.
          </p>
          <a href="#blog" className="text-indigo-600 underline font-semibold">
            Go to Blog →
          </a>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Downloadable Templates</h2>
          <p className="mb-4">
            Get plug-and-play budget planners, habit trackers, and investment strategy sheets.
          </p>
          <a href="#downloads" className="text-indigo-600 underline font-semibold">
            Download Templates →
          </a>
        </div>
      </div>
    </div>
  );
}
