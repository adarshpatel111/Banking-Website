import { Bitcoin, DollarSign, Euro, IndianRupee, Plus } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="mt-10 lg:mt-20 mb-10 lg:mb-60 flex flex-col lg:flex-row items-center justify-between text-(--secondary-text-color) gap-12">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2">
        <div>
          <span className="inline-flex text-sm sm:text-base gap-2 items-center p-2 rounded-full bg-(--tertiary-color)">
            <img
              src="/src/assets/Images/Correct-icon.png"
              alt="Correct-icon"
              className="w-5 h-5"
            />
            No LLC Required, No Credit Check.
          </span>
        </div>

        <div className="mt-8 lg:mt-10 flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight">
            Welcome to YourBank Empowering Your{" "}
            <span className="text-(--primary-color)">Financial Journey</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl mt-3text-(--grey-70)">
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers' needs.
          </p>

          <button className="w-full sm:w-auto lg:w-50 bg-(--primary-color) py-3 rounded-full text-(--tertiary-text-color) text-sm lg:text-base font-medium cursor-pointer hover:bg-(--green-65) transition">
            Open Account
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-16 lg:mt-0">
        <div className="relative w-full max-w-sm sm:max-w-md lg:w-105 lg:h-130">
          {/* Arrow (desktop only) */}
          <img
            className="hidden lg:block absolute top-0 -right-40 z-0 pointer-events-none"
            src="/src/assets/Images/Arrow-Abstract-Design.png"
            alt="Abstract arrow design"
          />

          {/* Main Card */}
          <div className="relative z-10 w-full bg-(--background-screen-color) border-2 border-(--tertiary-color) p-4 sm:p-6 rounded-2xl">
            {/* Monthly Income Badge */}
            <div
              className="
  absolute
  -top-10
  -left-10
  sm:-top-10
  sm:-left-20
  border-2
  border-(--tertiary-color)
  flex
  items-center
  gap-2
  rounded-2xl
  p-3
  bg-(--temporary-green-color)
  z-20
"
            >
              <Plus className="w-5 h-5 sm:w-8 sm:h-8 bg-(--primary-color) rounded-full text-(--background-navbar-color)" />
              <div className="flex flex-col text-xs sm:text-sm">
                <span>+ $5000,00</span>
                <span>Monthly Income</span>
              </div>
            </div>

            <h3 className="font-semibold text-base sm:text-lg mt-6">
              Your Transactions
            </h3>

            {/* Transactions */}
            <div className="mt-6 space-y-4">
              {["Joel Kenley", "Mark Smith", "Lenen Roy"].map((name, index) => (
                <div
                  key={index}
                  className="border border-(--tertiary-color) p-3 flex justify-between items-center rounded-xl bg-(--secondary-color) shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <img
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      src="/src/assets/Images/Dubble-Sub-Container.png"
                      alt="Transaction icon"
                    />
                    <div>
                      <span className="text-sm font-medium">Transaction</span>
                      <div className="text-xs text-gray-500">{name}</div>
                    </div>
                  </div>
                  <span className="font-semibold text-sm">- $68.00</span>
                </div>
              ))}
            </div>

            {/* Money Exchange */}
            <div className="mt-8">
              <h2 className="font-semibold text-lg">Money Exchange</h2>

              <div className="relative bg-(--secondary-color) shadow-md rounded-3xl border-2 border-(--grey-30) overflow-hidden mt-4">
                <table className="w-full border-collapse text-sm sm:text-base">
                  <thead>
                    <tr className="border-b border-(--grey-30)">
                      {/* INR Column */}
                      <th className="p-4 border-r border-(--grey-30) text-left align-top">
                        <div className="flex flex-col items-start gap-1">
                          <div className="flex items-center gap-2">
                            <img
                              src="./src/assets/Images/indian-flag.png"
                              alt="INR Flag"
                              className="w-6 h-6"
                            />
                            <span className="font-medium">INR</span>
                          </div>
                          <span className="text-xs text-(--grey-70)">
                            Indian Rupee
                          </span>
                        </div>
                      </th>

                      {/* USD Column */}
                      <th className="p-4 text-left align-top">
                        <div className="flex flex-col items-start gap-1">
                          <div className="flex items-center gap-2">
                            <img
                              src="./src/assets/Images/US-flag.png"
                              alt="USD Flag"
                              className="w-6 h-6"
                            />
                            <span className="font-medium">USD</span>
                          </div>
                          <span className="text-xs text-(--grey-70)">
                            United States Dollar
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="p-6 font-semibold border-r border-(--grey-30)">
                        ₹50,000
                      </td>
                      <td className="p-6 font-semibold">$12.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <button className="w-full mt-6 bg-(--temporary-green-color) text-(--primary-color) font-medium py-3 rounded-full hover:opacity-90 transition">
                Exchange
              </button>
            </div>

            {/* Supported Currency Badge */}
            <div
              className="
  absolute
  -bottom-14
  -right-10
  sm:-bottom-16
  sm:-right-20
  border-2
  border-(--tertiary-color)
  flex
  items-center
  gap-3
  rounded-full
  p-2
  bg-(--temporary-green-color)
  z-20
"
            >
              <span className="text-xs whitespace-nowrap">
                Supported Currency
              </span>

              <div className="flex items-center gap-2 bg-(--background-screen-color) px-3 py-2 rounded-full">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 p-1 text-(--primary-color) bg-(--tertiary-color) rounded-full" />
                <Euro className="w-4 h-4 sm:w-5 sm:h-5 p-1 text-(--primary-color) bg-(--tertiary-color) rounded-full" />
                <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 p-1 text-(--primary-color) bg-(--tertiary-color) rounded-full" />
                <Bitcoin className="w-4 h-4 sm:w-5 sm:h-5 p-1 text-(--primary-color) bg-(--tertiary-color) rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
