import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Root() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
