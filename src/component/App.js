import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Join from "./pages/Join";
import Create from "./pages/create";
import Plus from "./pages/plus";
import Final from "./pages/final";

function App(props) {
  return (
    <Router>
      <div className="bg-custom h-screen">
        <Routes>
          {/* Route for the root URL */}
          <Route path="/" element={<Navbar />} />

          {/* Route for other pages */}
          <Route path="/create" element={<Create />} />
          <Route path="/join" element={<Join />} />
          <Route path="/plus" element={<Plus />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
