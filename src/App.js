import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Corrected paths — all point to ./Components/pages
import Home from "./Components/pages/Home";
import Resources from "./Components/pages/Resources";
import Contact from "./Components/pages/Contact";
import FAQ from "./Components/pages/FAQ";
import StartHere from "./Components/pages/StartHere";
import Worksheets from "./Components/pages/Worksheets";
import VisualizationTools from "./Components/pages/VisualizationTools";
import WealthRewiredPath from "./Components/pages/WealthRewiredPath";

// Blog is in src/
import Blog from "./Blog";

// Tabs is in Components
import Tabs from "./Components/Tabs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/start" element={<StartHere />} />
        <Route path="/worksheets" element={<Worksheets />} />
        <Route path="/visualization-tools" element={<VisualizationTools />} />
        <Route path="/wealth-rewired-path" element={<WealthRewiredPath />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/tabs" element={<Tabs />} />
      </Routes>
    </Router>
  );
}

export default App;