const StartUrJourney = () => {
  return (
    <div
      className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-8 
      bg-(--background-navbar-color) 
      text-(--secondary-text-color) 
      px-6 sm:px-10 lg:px-20 
      py-10 sm:py-14 lg:py-16 
      rounded-2xl lg:rounded-3xl 
      mt-10 lg:mt-20 mb-10 lg:mb-20 overflow-hidden"
    >
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-32 sm:w-48 lg:w-60 opacity-30 lg:opacity-100 pointer-events-none"
        src="/src/assets/Images/bg-top-left.png"
        alt="bg-top-left"
      />

      {/* Text Section */}
      <div className="w-full lg:w-[70%] flex flex-col gap-4 text-center lg:text-left">
        <span className="text-2xl sm:text-3xl lg:text-5xl font-heading font-semibold leading-tight">
          Start your financial journey with
          <span className="text-(--primary-color)"> YourBank today!</span>
        </span>

        <span className="text-sm sm:text-base lg:text-lg text-(--grey-70)">
          Ready to take control of your finances? Join YourBank now, and let us
          help you achieve your financial goals with our tailored solutions and
          exceptional customer service.
        </span>
      </div>

      {/* Button Section */}
      <div className="w-full lg:w-auto flex justify-center lg:justify-end">
        <button
          className="bg-(--primary-color) 
          text-black 
          px-6 py-3 
          text-base sm:text-lg 
          rounded-full 
          hover:scale-105 transition-transform duration-300"
        >
          Open Account
        </button>
      </div>
    </div>
  );
};

export default StartUrJourney;
