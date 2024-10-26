import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Experience,
  Research,
  Awards,
  Training,
} from "../pages/index";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/research" element={<Research />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/training" element={<Training />} />
    </Routes>
  );
};

export default Navigation;
