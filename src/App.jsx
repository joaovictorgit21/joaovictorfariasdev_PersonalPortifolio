// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Agradecimento from "./pages/Agradecimento";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<About />} />
        <Route path="/newpost" element={<Contact />} />
        <Route path="/agradecimento" element={<Agradecimento />} />
      </Routes>
    </Router>
  );
}

export default App;
