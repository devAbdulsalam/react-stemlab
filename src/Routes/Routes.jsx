import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import ProgressBar from "../components/ProgressBar";
import Layout from "../Layout/Layout";
import "../styles/styles.css";

function Router() {
  const [menuActive, setMenuActive] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);

    const handleScroll = () => {
      if (menuActive) {
        setMenuActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location, menuActive]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setMenuActive(false);
  };

  return (
    <>
      <div className={`showcase bg-white ${menuActive ? "active" : ""}`}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                menuActive={menuActive}
                setMenuActive={setMenuActive}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
                location={location}
              />
            }
          >
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </div>
      <div className="dropdown-menu sm:flex-between md:hidden z-1000">
        <div>
          <Link
            className={`dropdown-item nav-link ${
              activeLink === "/" ? "active" : ""
            }`}
            to="/"
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
          <Link
            className={`dropdown-item nav-link ${
              activeLink === "/about" ? "active" : ""
            }`}
            to="/about"
            onClick={() => handleLinkClick("/about")}
          >
            About
          </Link>
          <Link
            className={`dropdown-item nav-link ${
              activeLink === "/gallery" ? "active" : ""
            }`}
            to="/gallery"
            onClick={() => handleLinkClick("/gallery")}
          >
            Gallery
          </Link>
          <Link
            className={`dropdown-item nav-link ${
              activeLink === "/contact" ? "active" : ""
            }`}
            to="/contact"
            onClick={() => handleLinkClick("/contact")}
          >
            Contact
          </Link>
        </div>
        <div>
          <a href="https://wa.link/svo99g" className="">
            <button className="text-white py-2 px-2 rounded text-center border">
              Register
            </button>
          </a>
        </div>
      </div>
      <div className={menuActive ? "hidden" : ""}>
        <ProgressBar />
      </div>
    </>
  );
}

export default Router;
