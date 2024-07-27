import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PropTypes from "prop-types";

const Layout = ({ menuActive, setMenuActive }) => {
  return (
    <>
      <Header menuActive={menuActive} setMenuActive={setMenuActive} />
      <Outlet />
      <Footer />
    </>
  );
};
Layout.propTypes = {
  menuActive: PropTypes.bool.isRequired,
  setMenuActive: PropTypes.func.isRequired,
};
export default Layout;
