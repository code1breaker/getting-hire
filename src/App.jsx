import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Candidate from "./pages/Candidate";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

const App = () => {
  return (
    <div className="bg-[#edf2f7] min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candidates" element={<Candidate />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
