import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
};
export default MainLayout;
