import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import JoinChallenge from "./pages/JoinChallenge";

function App() {
  return (
    <Router>
      <div className="bg-custom h-screen">
        <Routes>
          {/* Route for the root URL */}
          <Route path="/" element={<Navbar />} />

          {/* Route for other pages */}
          <Route path="/join" element={<JoinChallenge />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
