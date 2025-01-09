import { Route, Routes } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Agradecimento from "../pages/Agradecimento";

const RoutesApp = () => {
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<About />} />
        <Route path="/newpost" element={<Contact />} />
        <Route path="/agradecimento" element={<Agradecimento />} />
      </Routes>
}

export default RoutesApp;