import { BadgeDollarSign, HeartPulse, PiggyBank, Scale } from "lucide-react";
import IconBadge from "./IconBadge";

const OurBenefits = () => {
  const OurBenefitsData = [
    {
      title: "Competitive Compensation",
      icon: BadgeDollarSign,
      desc: "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.",
    },
    {
      title: "Health and Wellness",
      icon: HeartPulse,
      desc: "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.",
    },
    {
      title: "Retirement Planning",
      icon: PiggyBank,
      desc: "YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.",
    },
    {
      title: "Work-Life Balance",
      icon: Scale,
      desc: "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.",
    },
  ];

  return (
    <div className="py-14 mb-10 space-y-10">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-(--secondary-text-color)">
        Our <span className="text-(--primary-color)">Benefits</span>
      </h2>

      <p className="md:w-2/3 text-(--grey-70) text-base sm:text-lg lg:text-xl mt-3">
        At YourBank, we value our employees and are dedicated to their
        well-being and success. We offer a comprehensive range of benefits
        designed to support their personal and professional growth.
      </p>
      <div className="relative mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {OurBenefitsData.map((item, index) => {
            const Icon = item.icon;
            const isPatternA = index === 0 || index === 3;
            const isLast = index === OurBenefitsData.length - 1;

            return (
              <div key={item.title} className="relative">
                <div
                  className={`
              relative
              p-10
              flex flex-col gap-4
              bg-(--background-navbar-color)
              overflow-hidden
              ${
                isPatternA
                  ? `
                    rounded-tl-[40px] rounded-br-[40px]
                    rounded-tr-[18px] rounded-bl-[18px]
                  `
                  : `
                    rounded-tr-[40px] rounded-bl-[40px]
                    rounded-tl-[18px] rounded-br-[18px]
                  `
              }
            `}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-(--primary-color)/5 to-transparent pointer-events-none" />
                  <div className="relative">
                    <div className="flex items-center gap-4">
                      <IconBadge icon={Icon} size="md" />
                      <span className="text-xl text-(--white)">
                        {item.title}
                      </span>
                    </div>

                    <p className="text-(--grey-70) text-base md:text-lg mt-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {!isLast && (
                  <div
                    className="md:hidden my-6 h-0.5
              bg-[repeating-linear-gradient(to_right,var(--tertiary-color)_0_16px,transparent_16px_32px)]
              opacity-40"
                  />
                )}
              </div>
            );
          })}
        </div>

        <div
          className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-[48%] w-0.5
    bg-[repeating-linear-gradient(to_bottom,var(--tertiary-color)_0_16px,transparent_16px_32px)]
    opacity-40 pointer-events-none"
        />
        <div
          className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 h-[48%] w-0.5
    bg-[repeating-linear-gradient(to_bottom,var(--tertiary-color)_0_16px,transparent_16px_32px)]
    opacity-40 pointer-events-none"
        />
        <div
          className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5
    bg-[repeating-linear-gradient(to_right,var(--tertiary-color)_0_16px,transparent_16px_32px)]
    opacity-40 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default OurBenefits;
