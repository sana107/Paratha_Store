import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import AvailableOn from "./Components/AvailableOn";
import Services from "./Components/Services";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addincart from "./Components/Addincart";
// import PageNotFound from "./Components/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <ToastContainer />

      <Routes>
        {/* <Route path="*" element={<PageNotFound />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/" element={<HeroSection />} />
        <Route path="/contact" element={<AvailableOn />} />
        <Route path="/cart" element={<Addincart />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
