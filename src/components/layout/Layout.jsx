import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Cta from "../../sections/Cta";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Cta />
      </main>
    </>
  );
};

export default Layout;
