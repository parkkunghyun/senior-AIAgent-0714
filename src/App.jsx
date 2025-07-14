import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import Agent from "./pages/Agent";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/agent" element={<Agent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
