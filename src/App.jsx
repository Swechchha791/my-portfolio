// src/App.jsx
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import ProjectSection from "./components/projectSection";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div className="min-h-screen flex-grow font-serif">
      {" "}
      {/* //bg-gradient-animated */}
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <ProjectSection />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <footer className="p-4 bg-gray-300 dark:bg-gray-800 text-center">
        <p className="text-gray-900 dark:text-gray-300">© 2024 Swechchha</p>
      </footer>
    </div>
  );
}

export default App;
