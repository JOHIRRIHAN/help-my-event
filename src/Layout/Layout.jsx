import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Heade from "./Heade";


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Heade />
        <Outlet /> 
      <Footer />
    </div>
  );
};

export default Layout;
