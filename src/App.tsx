import { useLocation } from "react-router-dom";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import headLeft from "/src/assets/Images/Head-left-group.png";
const App = () => {
  const location = useLocation();
  return (
    <>
      <div className="w-full h-full">
        {location.pathname === "/" ? (
          <div className="absolute top-0 left-0">
            <img src={headLeft} alt="Logo" />
          </div>
        ) : (
          ""
        )}
        <div className="w-[95%] lg:w-[80%] mx-auto p-4">
          <Navbar />
          <AllRoutes />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
