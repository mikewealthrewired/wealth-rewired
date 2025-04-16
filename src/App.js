import React, { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("resources");

  const tabs = [
    { id: "resources", label: "Resources" },
    { id: "guides", label: "Guides" },
    { id: "worksheets", label: "Worksheets" },
    { id: "visualization", label: "Visualization Tools" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Tab Navigation */}
      <nav className="bg-blue-600 text-white flex justify-center space-x-6 py-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded ${
              activeTab === tab.id ? "bg-blue-800" : "hover:bg-blue-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      <div className="p-8 max-w-4xl mx-auto">
        {activeTab === "resources" && <Resources />}
        {activeTab === "guides" && <Guides />}
        {activeTab === "worksheets" && <Worksheets />}
        {activeTab === "visualization" && <Visualization />}
        {activeTab === "faq" && <FAQ />}
      </div>
    </div>
  );
}

// Tab Components
function Resources() {
  return <p>Here are your resources to get started with Wealth Rewired.</p>;
}

function Guides() {
  return <p>Step-by-step guides for rewiring your financial mindset.</p>;
}

function Worksheets() {
  return <p>Downloadable worksheets to practice and reflect.</p>;
}

function Visualization() {
  return <p>Visualization tools to support clarity and confidence.</p>;
}

function FAQ() {
  return <p>Common questions and helpful answers.</p>;
}

export default App;
