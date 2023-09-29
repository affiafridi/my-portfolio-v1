import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Credentials from "./pages/Credentials";

// My Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import ScrollToTop from "./components/ScrollToTop";
import Pagination from "./pages/Pagination";
import LoadingBar from "./components/LoadingBar/LoadingBar";

function App() {
  const { color, colorMode } = useColorMode();

  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Works />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="credentials" element={<Credentials />} />
          <Route path="services" element={<Services />} />
          <Route path="page" element={<Pagination />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
