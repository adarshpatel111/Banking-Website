import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Careers from "../Pages/Careers";
import About from "../Pages/About";
import Security from "../Pages/Security";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/about" element={<About />} />
      <Route path="/security" element={<Security />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AllRoutes;
