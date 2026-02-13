import BannerStyleIntro from "../BannerStyleIntro";
import FAQ from "../FAQ";
import ProtectYou from "../ProtectYou";

const Security = () => {
  return (
    <div className="relative w-full h-full">
      <BannerStyleIntro
        title="Your Security is Our "
        highlightText="Top Priority"
        description="At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority."
        mainImage="/src/assets/Images/security-banner-img.png"
        bgImage="/src/assets/Images/bg-usecase2.png"
      />
      <ProtectYou />
      <FAQ />
    </div>
  );
};

export default Security;
