const Navbar = () => {
  return (
    <div className="w-full h-[10%] flex justify-between items-center rounded-3xl p-3 bg-(--background-navbar-color) text-(--secondary-text-color)">
      <div className="flex gap-3 text-2xl justify-center items-center ">
        <img src="/src/assets/Images/Shape-30.png" alt="Logo" />
        <span>YourBank</span>
      </div>

      <div>
        <ul className="flex gap-3">
          <li>Home</li>
          <li>Careers</li>
          <li>About</li>
          <li>Security</li>
        </ul>
      </div>

      <div>
        <ul className="flex gap-3 items-center">
          <li>Sign Up</li>
          <li className="bg-(--primary-color) pl-3 pr-3 pt-1 pb-1 rounded-3xl text-(--tertiary-text-color)">
            Login
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
