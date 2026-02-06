
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "@/layout/RootLayout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import AboutUs from "@/pages/AboutUs";
import Collection from "@/pages/Collection";
import Customize from "@/pages/Customize";
import BestSeller from "@/components/BestSeller";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="collection" element={<Collection />} />
          <Route path="customize" element={<Customize />} />
          <Route path="best-seller" element={<BestSeller />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
