import React, { useState } from "react";
import Home from "./pages/Home";
import WealthRewiredPath from "./pages/WealthRewiredPath";
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
      case "WealthRewiredPath":
        return <WealthRewiredPath />;
      case "Resources":
        return <Resources />;
      case "Worksheets":
        return <Worksheets />;
      case "VisualizationTools":
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
      {/* Nav bar */}
      <nav className="flex flex-wrap justify-center bg-indigo-700 text-white py-4 space-x-4 text-sm sm:text-base">
        <button onClick={() => setActiveTab("Home")} className="hover:underline">Home</button>
        <button onClick={() => setActiveTab("WealthRewiredPath")} className="hover:underline">Wealth Rewired Path</button>
        <button onClick={() => setActiveTab("Resources")} className="hover:underline">Resources</button>
        <button onClick={() => setActiveTab("Worksheets")} className="hover:underline">Worksheets</button>
        <button onClick={() => setActiveTab("VisualizationTools")} className="hover:underline">Visualization Tools</button>
        <button onClick={() => setActiveTab("FAQ")} className="hover:underline">FAQ</button>
        <button onClick={() => setActiveTab("Contact")} className="hover:underline">Contact</button>
      </nav>

      {/* Active tab content */}
      <main className="p-6">{renderTab()}</main>
    </div>
  );
};

export default Tabs;
