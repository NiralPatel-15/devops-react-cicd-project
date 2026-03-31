import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import TeamMember from "./pages/TeamMember";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<TeamMember />} />
      </Routes>
    </Router>
  );
}

export default App;
