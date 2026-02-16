import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-(--background-navbar-color) text-(--secondary-text-color) pt-12">
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col gap-12 pb-10">
        {/* Logo */}
        <div className="flex justify-center items-center gap-3 text-base sm:text-lg font-semibold">
          <img
            src="/src/assets/Images/Shape-30.png"
            alt="YourBank Logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-semibold">YourBank</span>
        </div>

        {/* Navigation */}
        <nav className="border-b border-(--tertiary-color) pb-6">
          <ul className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 text-sm">
            <li>
              <Link to="/" className="hover:opacity-80 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:opacity-80 transition">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:opacity-80 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/security" className="hover:opacity-80 transition">
                Security
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="border-b border-(--tertiary-color) pb-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-left text-sm">
            {/* Email */}
            <a
              href="mailto:hello@yourbank.com"
              className="flex gap-2 items-center hover:opacity-80 transition"
            >
              <Mail className="w-5 h-5 stroke-(--primary-color)" />
              hello@yourbank.com
            </a>

            {/* Phone */}
            <a
              href="tel:+91123456789"
              className="flex gap-2 items-center hover:opacity-80 transition"
            >
              <Phone className="w-5 h-5 stroke-(--primary-color)" />
              +91 123456789
            </a>

            {/* Location */}
            <a
              href="https://maps.google.com/?q=Mumbai+India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center hover:opacity-80 transition"
            >
              <MapPin className="w-5 h-5 stroke-(--primary-color)" /> Mumbai,
              India
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="flex flex-col lg:flex-row justify-between items-center gap-6 text-sm 
  bg-(--background-screen-color) 
  border border-(--tertiary-color) 
  w-full lg:w-[85%]
  md:rounded-full p-4"
        >
          {/* Social Links */}
          <ul className="flex gap-4">
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <li
                key={name}
                className="group rounded-full transition-all duration-300 hover:bg-(--primary-color)"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex items-center justify-center p-2 rounded-full"
                >
                  <Icon className="w-8 h-8 stroke-(--primary-color) transition-colors duration-300 group-hover:stroke-(--tertiary-color)" />
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <span className="text-center">
            © {new Date().getFullYear()} YourBank. All Rights Reserved.
          </span>

          {/* Policies */}
          <div className="flex gap-3">
            <Link to="/privacy" className="hover:opacity-80 transition">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms" className="hover:opacity-80 transition">
              Terms & Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/yourbank",
    icon: Facebook,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourbank",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/yourbank",
    icon: Linkedin,
  },
];
