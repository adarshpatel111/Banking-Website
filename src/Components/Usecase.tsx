const Usecase = () => {
  return (
    <div className="space-y-16 text-(--secondary-text-color) my-16">
      {/* Heading */}
      <div className="flex flex-col gap-4">
        <h2 className="text-6xl">
          <span className="text-(--primary-color)">Use</span>
          <span> Case</span>
        </h2>

        <p className="text-(--grey-70) text-xl max-w-2xl">
          At YourBank, we cater to the diverse needs of individuals and
          businesses alike, offering a wide range of financial solutions
        </p>
      </div>

      {/* ---------------- FIRST BLOCK ---------------- */}

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CARD */}
        <div className="relative bg-(--secondary-color) p-10 rounded-3xl overflow-hidden">
          {/* Absolute Image */}
          <img
            src="./src/assets/Images/bg-usecase1.png"
            alt="start-journey-abstract-design"
            className="absolute top-0 left-0 opacity-100"
          />

          {/* Icon Boxes */}
          <div className="grid grid-cols-2 gap-4 relative z-10 p-2">
            <IconBox
              icon={`./src/assets/Images/managing-personal-fin-icon.png`}
              title="Managing Personal Finances"
            />
            <IconBox
              icon={`./src/assets/Images/saving-for-future-icon.png`}
              title="Investment Growth"
            />
            <IconBox
              icon={`./src/assets/Images/home-ownership-icon.png`}
              title="Secure Transactions"
            />
            <IconBox
              icon={`./src/assets/Images/education-funding-icon.png`}
              title="Saving For Future"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <RightContent
          title="For Individuals"
          desc="For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers"
        />
      </div>

      {/* ---------------- SECOND BLOCK (REVERSED) ---------------- */}

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <RightContent
          title="For Businesses"
          desc=" For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them"
        />

        {/* RIGHT CARD */}
        <div className="relative bg-(--secondary-color) p-10 rounded-3xl overflow-hidden">
          <img
            src="./src/assets/Images/bg-usecase2.png"
            alt="start-journey-abstract-design"
            className="absolute top-0 right-0 opacity-100"
          />

          <div className="grid grid-cols-2 gap-6 relative z-10">
            <IconBox
              icon={`./src/assets/Images/startups-enterpreneurs-icon.png`}
              title="Corporate Accounts"
            />
            <IconBox
              icon={`./src/assets/Images/cash-flow-management-icon.png`}
              title="Business Expansion"
            />
            <IconBox
              icon={`./src/assets/Images/bussiness-expansion-icon.png`}
              title="Fraud Protection"
            />
            <IconBox
              icon={`./src/assets/Images/payment-solutions-icon.png`}
              title="Payroll Management"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usecase;

/* ---------- Reusable Components ---------- */

const IconBox = ({ icon, title }: { icon: string; title: string }) => (
  <div className="w-90 h-70 flex flex-col justify-center items-center gap-3 bg-(--background-screen-color) p-4 border-2 border-(--tertiary-color) rounded-2xl">
    <img className="text-(--primary-color)" src={icon ? icon : ""} alt="" />
    <span className="text-sm text-center">{title}</span>
  </div>
);

const RightContent = ({ title, desc }: { title: string; desc: string }) => (
  <div className="h-full flex flex-col gap-20">
    <h3 className="text-4xl font-semibold">{title}</h3>

    <p className="text-(--grey-70) max-w-xl text-basic">{desc}</p>

    {/* Stats */}
    <div className="flex gap-10">
      <Stat percentage="78%" desc="Secure Retirement Planning" />
      <Stat percentage="63%" desc="Manageable Debt Consolidation" />
      <Stat percentage="91%" desc="Reducing financial burdens" />
    </div>

    {/* CTA */}
    <button className="bg-(--background-navbar-color) px-6 py-3 rounded-full w-fit hover:opacity-80 transition border-2 border-(--tertiary-color) text-2xl">
      Learn More
    </button>
  </div>
);

const Stat = ({ percentage, desc }: { percentage: string; desc: string }) => (
  <div className="pr-6 border-r border-(--tertiary-color) last:border-none">
    <p className="text-5xl text-(--primary-color) font-semibold">
      {percentage}
    </p>
    <p className="text-(--grey-70) text-xl">{desc}</p>
  </div>
);
