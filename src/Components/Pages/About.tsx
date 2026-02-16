import BannerStyleIntro from "../BannerStyleIntro";
import MissionandVision from "../MissionandVision";
import PressRealease from "../PressRealease";

const About = () => {
  return (
    <div className="relative w-full h-full">
      <BannerStyleIntro
        title="Where Banking Meets "
        highlightText="Excellence!"
        description="At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence."
        mainImage="/src/assets/Images/welcome-to-yourbank-about-img.png"
        bgImage="/src/assets/Images/bg-top-right.png"
      />
      <MissionandVision />
      <PressRealease />
    </div>
  );
};

export default About;
