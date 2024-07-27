import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Layout from "./Layout";
import "./App.css";
function App() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <div className={`showcase bg-white ${menuActive ? "active" : ""}`}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Layout menuActive={menuActive} setMenuActive={setMenuActive} />
              }
            >
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="gallery" element={<Gallery />} />
            </Route>
          </Routes>
        </Router>
      </div>
      <div className="dropdown-menu sm:flex-between md:hidden z-1000">
        <div>
          <a className="dropdown-item" href="/" data-aos="fade-left">
            Home
          </a>
          <a className="dropdown-item" href="/about" data-aos="fade-left">
            About
          </a>
          <a className="dropdown-item" href="/gallery" data-aos="fade-right">
            Gallery
          </a>
          <a className="dropdown-item" href="/contact" data-aos="fade-left">
            Contact
          </a>
        </div>
        <div>
          <a href="https://wa.link/svo99g" className="">
            <button
              className="bg-primary2 text-white py-2 px-1 rounded text-left w-full border border-primary2 hover:bg-pirmary2"
              data-aos="fade-right"
            >
              Contact Us
            </button>
          </a>
          <a href="https://wa.link/svo99g" className="">
            <button
              className="bg-primary2 text-white py-2 px-1 rounded text-left w-full border mt-2 border-primary2 hover:bg-pirmary2"
              data-aos="fade-up"
            >
              Register
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
