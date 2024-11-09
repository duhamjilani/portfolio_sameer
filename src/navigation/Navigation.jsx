import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  AcademicExp,
  Research,
  Awards,
  Training,
  IndustrialExp
} from "../pages/index";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academicExp" element={<AcademicExp />} />
      <Route path="/research" element={<Research />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/training" element={<Training />} />
      <Route path="/industrialExp" element={<IndustrialExp />} />
    </Routes>
  );
};

export default Navigation;
