import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Cta from "../../sections/Cta";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Cta />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
