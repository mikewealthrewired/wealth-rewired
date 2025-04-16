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

  const tabStyle = (tabName) =>
    `px-4 py-2 rounded-md transition font-semibold ${
      activeTab === tabName
        ? "bg-white text-indigo-700"
        : "text-white hover:text-indigo-200"
    }`;

  return (
    <div>
      <nav className="flex flex-wrap justify-center bg-indigo-700 p-4 gap-3">
        <button onClick={() => setActiveTab("Home")} className={tabStyle("Home")}>Home</button>
        <button onClick={() => setActiveTab("WealthRewiredPath")} className={tabStyle("WealthRewiredPath")}>The Path</button>
        <button onClick={() => setActiveTab("Resources")} className={tabStyle("Resources")}>Resources</button>
        <button onClick={() => setActiveTab("Worksheets")} className={tabStyle("Worksheets")}>Worksheets</button>
        <button onClick={() => setActiveTab("VisualizationTools")} className={tabStyle("VisualizationTools")}>Visualization</button>
        <button onClick={() => setActiveTab("FAQ")} className={tabStyle("FAQ")}>FAQ</button>
        <button onClick={() => setActiveTab("Contact")} className={tabStyle("Contact")}>Contact</button>
      </nav>

      <main className="p-6">{renderTab()}</main>
    </div>
  );
};

export default Tabs;
