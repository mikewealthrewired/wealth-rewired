import React, { useState } from "react";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Worksheets from "./pages/Worksheets";
import VisualizationTools from "./pages/VisualizationTools";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const renderTab = () => {
    switch (activeTab) {
      case "Home":
        return <Home />;
      case "Resources":
        return <Resources />;
      case "Worksheets":
        return <Worksheets />;
      case "Visualization Tools":
        return <VisualizationTools />;
      case "FAQ":
        return <FAQ />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav className="flex justify-center bg-blue-600 p-4 space-x-6 text-white">
        <button onClick={() => setActiveTab("Home")}>Home</button>
        <button onClick={() => setActiveTab("Resources")}>Resources</button>
        <button onClick={() => setActiveTab("Worksheets")}>Worksheets</button>
        <button onClick={() => setActiveTab("Visualization Tools")}>Visualization Tools</button>
        <button onClick={() => setActiveTab("FAQ")}>FAQ</button>
        <button onClick={() => setActiveTab("Contact")}>Contact</button>
      </nav>
      <div className="p-8">{renderTab()}</div>
    </div>
  );
};

export default Tabs;
