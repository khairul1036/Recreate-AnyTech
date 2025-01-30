import { Outlet } from "react-router-dom";
import Navbar from "../components/share/Navbar";
import Footer from "../components/share/Footer";

const HomeLayout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="h-screen">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default HomeLayout;
