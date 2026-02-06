import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Offer from "@/components/Offer";
import { Outlet } from "react-router-dom";




const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Offer />
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
