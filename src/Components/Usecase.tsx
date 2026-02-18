import {
  Wallet,
  TrendingUp,
  ShieldCheck,
  PiggyBank,
  Building2,
  LineChart,
  ShieldAlert,
  CreditCard,
} from "lucide-react";
import IconBadge from "./IconBadge";

const Usecase = () => {
  return (
    <div className="space-y-12 md:space-y-16 text-(--secondary-text-color) my-12 md:my-16 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold">
          <span className="text-(--primary-color)">Use</span>
          <span> Case</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-(--grey-70) max-w-2xl">
          At YourBank, we cater to the diverse needs of individuals and
          businesses alike, offering a wide range of financial solutions
        </p>
      </div>

      {/* ---------------- FIRST BLOCK ---------------- */}

      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* LEFT CARD */}
        <div className="relative bg-(--secondary-color) p-6 sm:p-8 md:p-10 rounded-3xl overflow-hidden">
          <img
            src="./src/assets/Images/bg-top-left.png"
            alt="bg-top-left"
            className="absolute top-0 left-0 w-40 sm:w-52 md:w-auto opacity-100"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 p-2">
            <IconBox icon={Wallet} title="Managing Personal Finances" />
            <IconBox icon={TrendingUp} title="Investment Growth" />
            <IconBox icon={ShieldCheck} title="Secure Transactions" />
            <IconBox icon={PiggyBank} title="Saving For Future" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <RightContent
          title="For Individuals"
          desc="For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers"
        />
      </div>

      {/* ---------------- SECOND BLOCK ---------------- */}

      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <RightContent
          title="For Businesses"
          desc="For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them"
        />

        <div className="relative bg-(--secondary-color) p-6 sm:p-8 md:p-10 rounded-3xl overflow-hidden">
          <img
            src="./src/assets/Images/bg-top-right.png"
            alt="bg-top-right"
            className="absolute top-0 right-0 w-40 sm:w-52 md:w-auto opacity-100"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10">
            <IconBox icon={Building2} title="Corporate Accounts" />
            <IconBox icon={LineChart} title="Business Expansion" />
            <IconBox icon={ShieldAlert} title="Fraud Protection" />
            <IconBox icon={CreditCard} title="Payroll Management" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usecase;

/* ---------- Reusable Components ---------- */

const IconBox = ({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) => (
  <div className="w-full h-40 sm:h-48 md:h-56 flex flex-col justify-center items-center gap-3 bg-(--background-screen-color) p-4 border-2 border-(--tertiary-color) rounded-2xl">
    <IconBadge icon={Icon} responsive />
    <span className="text-xs sm:text-sm text-center">{title}</span>
  </div>
);

const RightContent = ({ title, desc }: { title: string; desc: string }) => (
  <div className="h-full flex flex-col gap-10 md:gap-14 lg:gap-20">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{title}</h3>

    <p className="text-sm sm:text-base md:text-lg text-(--grey-70) max-w-xl">
      {desc}
    </p>

    {/* Stats */}
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
      <Stat percentage="78%" desc="Secure Retirement Planning" />
      <Stat percentage="63%" desc="Manageable Debt Consolidation" />
      <Stat percentage="91%" desc="Reducing financial burdens" />
    </div>

    {/* CTA */}
    <button className="bg-(--background-navbar-color) px-5 sm:px-6 py-2 sm:py-3 rounded-full w-fit hover:opacity-80 transition border-2 border-(--tertiary-color) text-base sm:text-lg md:text-2xl">
      Learn More
    </button>
  </div>
);

const Stat = ({ percentage, desc }: { percentage: string; desc: string }) => (
  <div className="pr-0 sm:pr-6 sm:border-r border-(--tertiary-color) last:border-none">
    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary text-(--primary-color)">
      {percentage}
    </p>
    <p className="text-sm sm:text-base md:text-lg text-(--grey-70)">{desc}</p>
  </div>
);
