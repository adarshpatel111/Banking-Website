const StartUrJourney = () => {
  return (
    <div className="relative w-full h-50 flex gap-3 bg-(--background-navbar-color) text-(--secondary-text-color) justify-center items-center p-20 rounded-3xl mt-20 mb-20">
      <img
        className="absolute top-0 left-0 w-60 h-60"
        src="/src/assets/Images/start-journey-abstract-design.png"
        alt="start-journey-abstract-design"
      />
      <div className="w-[90%] flex flex-col gap-3">
        <span className="text-5xl">
          Start your financial journey with
          <span className="text-(--primary-color)"> YourBank today!</span>
        </span>
        <span className="text-xl text-(--grey-70)">
          Ready to take control of your finances? Join YourBank now, and let us
          help you achieve your financial goals with our tailored solutions and
          exceptional customer service
        </span>
      </div>
      <div>
        <button className="bg-(--primary-color) p-3 rounded-3xl text-(--black) text-2xl">
          Open Account
        </button>
      </div>
    </div>
  );
};

export default StartUrJourney;
