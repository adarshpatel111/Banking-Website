const OurBenefits = () => {
  const OurBenefitsData = [
    {
      title: "Competitive Compensation",
      icon: "/src/assets/Images/competitive-compensation-icon.png",
      alt: "competitive-compensation-icon",
      desc: "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.",
    },
    {
      title: "Health and Wellness",
      icon: "/src/assets/Images/health-wellness-icon.png",
      alt: "health-wellness-icon",
      desc: "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.",
    },
    {
      title: "Retirement Planning",
      icon: "/src/assets/Images/retirement-planning-icon.png",
      alt: "retirement-planning-icon",
      desc: "YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.",
    },
    {
      title: "Work-Life Balance",
      icon: "/src/assets/Images/work-life-balance-icon.png",
      alt: "work-life-balance-icon",
      desc: "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.",
    },
  ];
  return (
    <div className="py-14 mb-10 space-y-10">
      <h2 className="text-5xl text-(--secondary-text-color)">
        Our <span className="text-(--primary-color)">Benefits</span>
      </h2>
      <p className="md:w-2/3 text-(--grey-70) text-xl">
        At YourBank, we value our employees and are dedicated to their
        well-being and success. We offer a comprehensive range of benefits
        designed to support their personal and professional growth.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {OurBenefitsData.map((item) => (
          <div
            key={item.title}
            className="border rounded-tr-2xl rounded-bl-2xl rounded-tl-3xl rounded-br-3xl border-tl-(--primary-color) border-br-(--primary-color) p-10 flex flex-col gap-4 bg-(--background-navbar-color)"
          >
            <div className="flex items-center gap-3">
              <img src={item.icon} className="w-20 h-20" alt={item.alt} />
              <span className="text-xl md:text-xl text-(--white)">
                {item.title}
              </span>
            </div>

            <p className="text-(--grey-70) text-base md:text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBenefits;
