import React from "react";
import "./App.css";
import About from "./Components/About/About";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// import Home from "./Components/Home/Home";
import Project from "./Components/Projects/Project";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          {/* <Route index path="/" element={<Home />} /> */}
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
