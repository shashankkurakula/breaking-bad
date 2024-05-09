import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/ui/Header";
import Navbar from "./components/ui/Navbar";
import Characters from "./components/characters/Characters";
import Quotes from "./components/quotes/Quotes";

function App() {
  const breaking_bad_api = "https://cyan-gentle-adder.cyclic.app/breaking-bad";

  return (
    <div>
      <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Characters api={breaking_bad_api} />} />
          <Route
            path="/breaking-bad"
            element={<Characters api={breaking_bad_api} />}
          />
          <Route path="/quotes" element={<Quotes api={breaking_bad_api} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
