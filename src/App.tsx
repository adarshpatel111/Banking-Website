import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Ourproducts from "./Components/Ourproducts";
import StartUrJourney from "./Components/StartUrJourney";
import Testimonials from "./Components/Testimonials";
import OurFeatures from "./Components/OurFeatures";
import Usecase from "./Components/Usecase";

const App = () => {
  return (
    <div className="w-full h-full">
      <div className="absolute top-0 left-0">
        <img src="/src/assets/Images/Head-left-group.png" alt="Logo" />
      </div>
      <div className="w-[80%] mx-auto p-4">
        <Navbar />
        <HeroSection />
        <Ourproducts />
        <Usecase />
        <OurFeatures />
        <FAQ />
        <Testimonials />
        <StartUrJourney />
      </div>
      <Footer />
    </div>
  );
};

export default App;
