const HeroSection = () => {
  return (
    <div className="mt-20 mb-20 flex items-center justify-between text-(--secondary-text-color)">
      {/* LEFT SIDE */}
      <div className="w-1/2">
        <div className="w-full">
          <span className="inline-flex text-(--secondary-text-size) gap-2 items-center p-2 rounded-3xl bg-(--tertiary-color)">
            <img src="/src/assets/Images/Correct-icon.png" alt="Correct-icon" />
            No LLC Required, No Credit Check.
          </span>
        </div>
        <div className="mt-10 flex flex-col gap-3">
          <span className="text-6xl">
            Welcome to YourBank Empowering Your{" "}
            <span className="text-(--primary-color)"> Financial Journey</span>
          </span>
          <span className="text-(--grey-70) mt-20 text-3xl">
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers' needs.
          </span>
          <button className="w-[20%] bg-(--primary-color) p-3 rounded-3xl text-(--tertiary-text-color) mt-20 text-2xl cursor-pointer hover:bg-(--green-65) hover:scale-100 transition">
            Open Account
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-1/2 flex justify-center items-center text-md">
        <div className="relative w-105 h-130">
          <img
            className="absolute top-0 -right-45 z-0 pointer-events-none"
            src="/src/assets/Images/Arrow-Abstract-Design.png"
            alt="Abstract arrow design"
          />
          <div className="relative z-10 w-full h-full bg-(--background-screen-color) border-2 border-(--tertiary-color) p-5 rounded-2xl overflow-visible">
            <div className="w-50 border-2 border-(--tertiary-color) flex justify-center items-center gap-2 rounded-2xl p-3 absolute -top-15 -left-20 z-20 bg-(--temporary-green-color)">
              <img
                src="/src/assets/Images/Plus-Icon-Container.png"
                alt="Plus Icon"
              />

              <div className="flex flex-col">
                <span>+ $5000,00</span>
                <span>Monthly Income</span>
              </div>
            </div>

            <span className="font-semibold text-lg">Your Transactions</span>

            <div className="relative mt-40">
              {/* Transaction 1 */}
              <div className="absolute bottom-24 left-2 right-2 border border-(--secondary-color) p-3 flex justify-between items-center rounded-xl bg-(--tertiary-color) shadow-sm opacity-80 z-30">
                <div className="flex items-center gap-3">
                  <img
                    className="w-8 h-8"
                    src="/src/assets/Images/Dubble-Sub-Container.png"
                    alt="Transaction icon"
                  />

                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-medium">Transaction</span>
                    <span className="text-xs text-gray-500">Joel Kenley</span>
                  </div>
                </div>

                <span className="font-semibold text-sm">- $68.00</span>
              </div>

              {/* Transaction 2 */}
              <div className="absolute bottom-14 left-5 right-5 border border-(--tertiary-color) p-3 flex justify-between items-center rounded-xl bg-(--secondary-color) shadow-md opacity-90 z-20">
                <div className="flex items-center gap-3">
                  <img
                    className="w-8 h-8"
                    src="/src/assets/Images/Dubble-Sub-Container.png"
                    alt="Transaction icon"
                  />

                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-medium">Transaction</span>
                    <span className="text-xs text-gray-500">Mark Smith</span>
                  </div>
                </div>

                <span className="font-semibold text-sm">- $68.00</span>
              </div>

              {/* Transaction 3 */}
              <div className="absolute bottom-4 left-8 right-8 border border-(--tertiary-color) p-3 flex justify-between items-center rounded-xl bg-(--secondary-color) shadow-lg z-10">
                <div className="flex items-center gap-3">
                  <img
                    className="w-8 h-8"
                    src="/src/assets/Images/Dubble-Sub-Container.png"
                    alt="Transaction icon"
                  />

                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-medium">Transaction</span>
                    <span className="text-xs text-gray-500">Lenen Roy</span>
                  </div>
                </div>

                <span className="font-semibold text-sm">- $68.00</span>
              </div>
            </div>

            <div className="w-full max-w-md mx-auto">
              <h2 className="font-semibold text-xl text-(--secondary-text-color)">
                Money Exchange
              </h2>

              <div className="relative bg-(--secondary-color) shadow-md rounded-3xl border-2 border-(--grey-30)">
                <table className="w-full  rounded-3xl overflow-hidden border-collapse">
                  <thead>
                    <tr className="border-b border-(--grey-30)">
                      <th className="text-left p-4 border-r border-(--grey-30)">
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-2 items-center">
                            <img
                              className="w-8 h-8"
                              src="/src/assets/Images/Indian-flag.png"
                              alt="INR"
                            />
                            <p className="text-sm text-(--grey-70) font-lexend">
                              INR
                            </p>
                          </div>
                          <p className="font-medium">Indian Rupee</p>
                        </div>
                      </th>
                      <th className="text-left p-4">
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-2 items-center">
                            <img
                              className="w-8 h-8"
                              src="/src/assets/Images/US-flag.png"
                              alt="USD"
                            />
                            <p className="text-sm text-(--grey-70)">USD</p>
                          </div>
                          <p className="font-medium">United States Dollar</p>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-6 text-lg font-semibold text-(--secondary-text-color) border-r border-(--grey-30)">
                        ₹50,000
                      </td>

                      <td className="p-6 text-lg font-semibold text-(--secondary-text-color)">
                        $12.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className="w-full mt-6 bg-(--temporary-green-color) text-(--primary-color) font-medium py-2 rounded-3xl hover:opacity-90 transition">
                Exchange
              </button>
            </div>
            <div className="w-75 border-2 border-(--tertiary-color) flex justify-center items-center gap-2 rounded-3xl p-2 absolute -bottom-20 -right-15 z-10 bg-(--temporary-green-color)">
              <div className="flex text-[12px]">
                <span>Supported Currency</span>
              </div>
              <div className="flex justify-between items-center gap-1 bg-(--background-navbar-color) rounded-3xl p-2">
                <img
                  className="w-8 h8"
                  src="/src/assets/Images/dollar-sign.png"
                  alt="dollar-sign"
                />
                <img
                  className="w-8 h8"
                  src="/src/assets/Images/euro-sign.png"
                  alt="euro-sign"
                />
                <img
                  className="w-8 h8"
                  src="/src/assets/Images/bitcoin-sign.png"
                  alt="bitcoin-sign"
                />
                <img
                  className="w-8 h8"
                  src="/src/assets/Images/currency-sign.png"
                  alt="currency-sign"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
