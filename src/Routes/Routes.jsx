import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';
import ProgressBar from '../components/ProgressBar';
import Layout from '../Layout/Layout';
import '../styles/styles.css';

function Router() {
	const [menuActive, setMenuActive] = useState(false);
	const [activeLink, setActiveLink] = useState('/');

	const location = useLocation();

	useEffect(() => {
		setActiveLink(location.pathname);

		const handleScroll = () => {
			if (menuActive) {
				setMenuActive(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [location, menuActive]);

	const handleLinkClick = (path) => {
		setActiveLink(path);
		setMenuActive(false);
	};

	return (
		<>
			<div className={`showcase bg-white ${menuActive ? 'active' : ''}`}>
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
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="contact" element={<Contact />} />
						<Route path="gallery" element={<Gallery />} />
					</Route>
				</Routes>
			</div>
			<div className="dropdown-menu sm:flex-between md:hidden z-1000">
				<div>
					<Link
						className={`dropdown-item nav-link ${
							activeLink === '/' ? 'active' : ''
						}`}
						to="/"
						onClick={() => handleLinkClick('/')}
					>
						Home
					</Link>
					<Link
						className={`dropdown-item nav-link ${
							activeLink === '/about' ? 'active' : ''
						}`}
						to="/about"
						onClick={() => handleLinkClick('/about')}
					>
						About
					</Link>
					<Link
						className={`dropdown-item nav-link ${
							activeLink === '/gallery' ? 'active' : ''
						}`}
						to="/gallery"
						onClick={() => handleLinkClick('/gallery')}
					>
						Gallery
					</Link>
					<Link
						className={`dropdown-item nav-link ${
							activeLink === '/contact' ? 'active' : ''
						}`}
						to="/contact"
						onClick={() => handleLinkClick('/contact')}
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
			<div className={menuActive ? 'hidden' : ''}>
				<ProgressBar />
			</div>
			{/* <div className="sm:hidden md:block">
        <a
          href="https://github.com/mertJF/tailblocks"
          className="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 left-0 flex-center text-gray-800 ml-8 mb-8 shadow-sm border-gray-300 border"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div> */}
		</>
	);
}

export default Router;
