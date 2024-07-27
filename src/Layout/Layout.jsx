import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

const Layout = ({
  menuActive,
  setMenuActive,
  activeLink,
  setActiveLink,
  location,
}) => {
  return (
    <>
      <Header
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        location={location}
      />
      <Outlet />
      <Footer />
    </>
  );
};
Layout.propTypes = {
  menuActive: PropTypes.bool.isRequired,
  setMenuActive: PropTypes.func.isRequired,
  activeLink: PropTypes.string.isRequired,
  setActiveLink: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};
export default Layout;
