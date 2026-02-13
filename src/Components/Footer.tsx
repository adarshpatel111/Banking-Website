const Footer = () => {
  return (
    <div className="w-full bg-(--background-navbar-color) text-(--secondary-text-color) py-12">
      <div className="w-[80%] mx-auto flex flex-col gap-10">
        {/* Logo */}
        <div className="flex justify-center items-center gap-3">
          <img
            src="/src/assets/Images/Shape-30.png"
            alt="YourBank Logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-semibold">YourBank</span>
        </div>

        {/* Navigation */}
        <nav className="border-b border-(--tertiary-color) pb-6">
          <ul className="flex flex-wrap justify-center gap-8 text-lg">
            <li className="cursor-pointer hover:opacity-80 transition">Home</li>
            <li className="cursor-pointer hover:opacity-80 transition">
              Careers
            </li>
            <li className="cursor-pointer hover:opacity-80 transition">
              About
            </li>
            <li className="cursor-pointer hover:opacity-80 transition">
              Security
            </li>
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="border-b border-(--tertiary-color) pb-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center md:text-left">
            <span className="flex gap-2 items-center">
              <img src=".\src\assets\Images\mail-icon.png" alt="Mail-icon" />
              hello@yourbank.com
            </span>
            <span className="flex gap-2 items-center">
              <img
                src=".\src\assets\Images\telephone-icon.png"
                alt="Mail-icon"
              />
              +91 123456789
            </span>
            <span>Somewhere in India</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm bg-(--background-screen-color) border-2 border-(--tertiary-color) rounded-3xl p-2">
          {/* Social */}
          <ul className="flex gap-3">
            <li className="cursor-pointer hover:opacity-80 transition">
              <img
                className="w-8 h-8"
                src=".\src\assets\Images\footer-facebook-icon.png"
                alt="facebook-icon"
              />
            </li>
            <li className="cursor-pointer hover:opacity-80 transition">
              <img
                className="w-8 h-8"
                src=".\src\assets\Images\footer-twitter-icon.png"
                alt="twitter-icon"
              />
            </li>
            <li className="cursor-pointer hover:opacity-80 transition">
              <img
                className="w-8 h-8"
                src=".\src\assets\Images\footer-linkedin-icon.png"
                alt="linkedin-icon"
              />
            </li>
          </ul>

          {/* Copyright */}
          <span className="text-center">
            © {new Date().getFullYear()} YourBank. All Rights Reserved.
          </span>

          {/* Policies */}
          <span className="cursor-pointer hover:opacity-80 transition">
            Privacy Policy | Terms & Service
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
