import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Teaching from "./components/Teaching";
import Publications from "./components/publications";
import Contact from "./components/contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Publications />
      <Teaching />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
