import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icon library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = [
    { title: "Home", path: "/" },
    { title: "Careers", path: "/careers" },
    { title: "About", path: "/about" },
    { title: "Security", path: "/security" },
  ];

  return (
    <nav className="w-full flex items-center justify-between rounded-full p-4 bg-(--background-navbar-color) text-(--secondary-text-color) relative">
      {/* Logo */}
      <div className="flex gap-3 text-lg sm:text-xl font-bold items-center">
        <img
          src="/src/assets/Images/Shape-30.png"
          alt="Logo"
          className="w-8 md:w-10"
        />
        <span className="font-semibold">YourBank</span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 ">
        {NavLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="text-sm sm:text-base font-medium hover:opacity-80 transition"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex gap-4 items-center text-sm sm:text-base font-semibold">
        <Link to="/signup" className="hover:opacity-80 transition">
          Sign Up
        </Link>

        <Link
          to="/login"
          className="bg-(--primary-color) px-4 py-1 rounded-full text-(--tertiary-text-color)"
        >
          Login
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-(--background-navbar-color) md:hidden rounded-b-3xl shadow-lg z-20">
          <ul className="flex flex-col items-center gap-4 p-4">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-sm sm:text-base font-medium hover:opacity-80 transition"
                >
                  {link.title}
                </Link>
              </li>
            ))}

            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="text-sm sm:text-base font-semibold hover:opacity-80 transition"
            >
              Sign Up
            </Link>

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="text-sm sm:text-base font-semibold bg-(--primary-color) px-4 py-1 rounded-full text-(--tertiary-text-color)"
            >
              Login
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
