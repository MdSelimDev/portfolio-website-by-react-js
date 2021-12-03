import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutMe from "./components/Pages/AboutMe/AboutMe";
import Blog from "./components/Pages/Blog/Blog";
import Contact from "./components/Pages/Contact/Contact";
import Home from "./components/Pages/Home/Home";
import Notfound from "./components/Pages/Notfound/Notfound";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Footer from "./components/Pages/Share/Footer/Footer";
import Skill from "./components/Pages/Skill/Skill";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/404" element={<Notfound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
