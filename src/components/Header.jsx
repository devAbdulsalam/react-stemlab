import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ menuActive, setMenuActive }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const toggleMenu = () => {
    console.log(menuActive);
    setMenuActive((prev) => !prev);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
    const navLinks = document.querySelectorAll(".nav-link");
    const hoverLine = document.querySelector(".hover-line");

    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        const linkRect = link.getBoundingClientRect();
        const containerRect = link.parentElement.getBoundingClientRect();
        hoverLine.style.width = `${linkRect.width}px`;
        hoverLine.style.left = `${linkRect.left - containerRect.left - 18.5}px`;
      });

      link.addEventListener("mouseleave", () => {
        hoverLine.style.width = "0";
      });
    });

    const onScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 0) {
        nav.classList.add("scroll");
        nav.classList.add("shadow-sm");
      } else {
        nav.classList.remove("scroll");
        nav.classList.remove("shadow-sm");
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [location]);

  return (
    <div>
      <nav className="fixed z-50 w-full top-0 h-20 flex-between px-12 lg:px-24">
        <Link to="/about">
          <img src="/logo.png" alt="" className="md:w-140px md:block hidden" />
          <img src="/sublogo.png" alt="" className="w-10 md:hidden" />
        </Link>
        <div className="nav-container space-x-5 text-base hidden md:flex">
          <Link
            className={`nav-link ${activeLink === "/" ? "active" : ""}`}
            to="/"
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
          <Link
            className={`nav-link ${activeLink === "/about" ? "active" : ""}`}
            to="/about"
            onClick={() => handleLinkClick("/about")}
          >
            About Us
          </Link>
          <Link
            className={`nav-link ${activeLink === "/gallery" ? "active" : ""}`}
            to="/gallery"
            onClick={() => handleLinkClick("/gallery")}
          >
            Gallery
          </Link>
          <Link
            className={`nav-link ${activeLink === "/contact" ? "active" : ""}`}
            to="/contact"
            onClick={() => handleLinkClick("/contact")}
          >
            Contact
          </Link>
          <div className="hover-line"></div>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="relative flex justify-center items-center w-10 h-10"
            onClick={toggleMenu}
          >
            <div className={`menu ${menuActive ? "active" : ""}`}></div>
          </button>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  menuActive: PropTypes.bool.isRequired,
  setMenuActive: PropTypes.func.isRequired,
};

export default Navbar;
