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
    <nav className="w-full flex items-center justify-between rounded-3xl p-4 bg-(--background-navbar-color) text-(--secondary-text-color) relative">
      {/* Logo */}
      <div className="flex gap-3 text-xl md:text-2xl items-center">
        <img
          src="/src/assets/Images/Shape-30.png"
          alt="Logo"
          className="w-8 md:w-10"
        />
        <span className="font-semibold">YourBank</span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6">
        {NavLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path} className="hover:opacity-80 transition">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex gap-4 items-center">
        <Link to="/signup" className="hover:opacity-80 transition">
          Sign Up
        </Link>

        <Link
          to="/login"
          className="bg-(--primary-color) px-4 py-1 rounded-3xl text-(--tertiary-text-color)"
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
        <div className="absolute top-full left-0 w-full bg-(--background-navbar-color) md:hidden rounded-b-3xl shadow-lg">
          <ul className="flex flex-col items-center gap-4 p-4">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="hover:opacity-80 transition"
                >
                  {link.title}
                </Link>
              </li>
            ))}

            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-80 transition"
            >
              Sign Up
            </Link>

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="bg-(--primary-color) px-4 py-1 rounded-3xl text-(--tertiary-text-color)"
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
