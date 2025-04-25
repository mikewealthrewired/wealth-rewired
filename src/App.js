import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import StartHere from "./pages/StartHere";
import Worksheets from "./pages/Worksheets";
import VisualizationTools from "./pages/VisualizationTools";
import WealthRewiredPath from "./pages/WealthRewiredPath";
import Blog from "./Blog"; // assuming it's in src
import Tabs from "./Components/Tabs"; // adjust if moved

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

