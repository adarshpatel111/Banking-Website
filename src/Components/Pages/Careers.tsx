import BannerStyleIntro from "../BannerStyleIntro";
import FAQ from "../FAQ";
import JobOpening from "../JobOpening";
import OurBenefits from "../OurBenefits";
import OurValues from "../OurValues";
import StartUrJourney from "../StartUrJourney";

const Careers = () => {
  return (
    <div className="relative w-full h-full">
      <BannerStyleIntro
        title="Welcome to"
        highlightText="YourBank Careers!"
        description="Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking."
        mainImage="/src/assets/Images/welcome-to-yourbank-careers-img.png"
        bgImage="/src/assets/Images/bg-usecase2.png"
      />
      <OurValues />
      <OurBenefits />
      <JobOpening />
      <FAQ />
      <StartUrJourney />
    </div>
  );
};

export default Careers;
