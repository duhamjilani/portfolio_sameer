import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Navigation from "./navigation/Navigation";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./app.css";
function App() {
  return (
    <>
    
      <Navbar />
      <Navigation />
      <Footer />
    </>
  );
}

export default App;
