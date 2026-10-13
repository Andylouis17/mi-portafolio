import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] =
    useState(true);

  return (
    <div
      className={
        darkMode
          ? "app dark"
          : "app light"
      }
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Certifications />
        <Contact />
      </main>
       <Footer />
    </div>
  );
}

export default App;