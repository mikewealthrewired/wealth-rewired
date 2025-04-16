import React, { useState } from "react";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
// import other tabs...

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Resources");

  const renderTab = () => {
    switch (activeTab) {
      case "Home":
        return <Home />;
      case "Resources":
        return <Resources />;
      // add others...
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav className="flex justify-center bg-blue-600 p-4 space-x-6 text-white">
        <button onClick={() => setActiveTab("Home")}>Home</button>
        <button onClick={() => setActiveTab("Resources")}>Resources</button>
        {/* add others... */}
      </nav>
      <div className="p-8">{renderTab()}</div>
    </div>
  );
};

export default Tabs;
