import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ImageSlider from "./components/ImageSlider";
import Support from "./components/Support";
import Management from "./components/Management";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ImageSlider />} />
        <Route path="/about" element={<About />} />
        <Route path="/support-me" element={<Support />} />
        <Route path="/management" element={<Management />} />
      </Routes>
    </Router>
  );
}

export default App;
