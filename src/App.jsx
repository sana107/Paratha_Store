import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import AvailableOn from "./Components/AvailableOn";
import Services from "./Components/Services";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PageNotFound from "./Components/PageNotFound";
import Addincart from "./Components/Addincart";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        {/* <Route path="*" element={<PageNotFound />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/" element={<HeroSection />} />
        <Route path="/contact" element={<AvailableOn />} />
        <Route path ="/cart" element={<Addincart/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
