// src/Components/pages/VisualizationTools.jsx
import React from "react";

export default function VisualizationTools() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Visualization Tools</h1>
      <p className="text-lg mb-4">
        Your brain doesn't just process numbers—it responds powerfully to stories and visuals. Use these tools to rewire how you *see* money, success, and your future.
      </p>

      <ul className="space-y-4">
        <li className="border p-4 rounded bg-white shadow">
          <strong>Guided Visualization Journal:</strong> Record your mental movies that support financial growth.
        </li>
        <li className="border p-4 rounded bg-white shadow">
          <strong>Money Identity Vision Board:</strong> Pin images or ideas that represent your new wealth identity.
        </li>
        <li className="border p-4 rounded bg-white shadow">
          <strong>Financial Milestone Timeline:</strong> Plot your next 5 years of growth.
        </li>
      </ul>
    </div>
  );
}
