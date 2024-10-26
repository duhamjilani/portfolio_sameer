import Footer from "./components/Footer/Footer";
import Hero from "./components/Home/Hero";
import Navbar from "./components/Navbar/Navbar";
import {  Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Research from "./components/Research/Research";
import Awards from "./components/Awards/Awards";
import Training from "./components/Training/Training";




function App() {
  return (
    <div className="App">
      <>
        <Navbar />
       
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/research" element={<Research />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/training" element={<Training />} />
          </Routes>
      <Footer/>
      </>
    </div>
  );
}

export default App;
