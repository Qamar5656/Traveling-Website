import { useState, useEffect } from "react";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import Button from "../Models/Button";
import { Link } from "react-router-dom";
import SignUp from "../Forms/SignUp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // Fix toggle function typo
  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  // Lock body scroll when modal open
  useEffect(() => {
    if (showSignUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSignUp]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      submenu: [
        { name: "Train Booking", path: "/services/train-booking" },
        { name: "Tours", path: "/services/tours" },
      ],
    },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-colors duration-300 bg-surface shadow`}
    >
      <div className="container mx-auto flex justify-between items-center p-6">
        {/* Logo */}
        <Link
          className="text-2xl font-bold text-primary cursor-pointer"
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Pak Railfan
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 lg:space-x-12 text-md lg:text-lg">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              {item.submenu ? (
                <>
                  <button className="flex items-center gap-1 font-bold cursor-pointer text-surface hover:text-accent transition dark:text-light">
                    {item.name}
                    <span className="transition duration-300 group-hover:hidden">
                      <FiChevronDown />
                    </span>
                    <span className="hidden group-hover:inline-block transition duration-300">
                      <FiChevronUp />
                    </span>
                  </button>

                  {/* Dropdown menu */}
                  <ul className="absolute top-full mt-3 font-semibold bg-white dark:bg-surface shadow-md rounded opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 min-w-[10rem]">
                    {item.submenu.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          to={sub.path}
                          className="block px-4 py-2 text-surface hover:text-primary hover:bg-gray-100 dark:text-light dark:hover:bg-secondary dark:hover:text-white whitespace-nowrap transition"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  to={item.path}
                  className="nav-link font-bold text-surface hover:text-accent dark:text-light transition cursor-pointer"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button text="Sign-Up" onClick={toggleSignUp} />
          <Button text="Sign-In" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-surface cursor-pointer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-surface shadow-lg font-bold">
          <ul className="flex flex-col space-y-4 px-6 py-6 items-center">
            {navItems.map(({ name, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
            <li>
              {/* On mobile dropdown, open SignUp modal on button click */}
              <Button
                text="Sign-Up"
                onClick={() => {
                  setShowSignUp(true);
                  setMenuOpen(false); // close mobile menu
                }}
              />
            </li>
            <li>
              <Button text="Sign-In" />
            </li>
          </ul>
        </div>
      )}

      {/* Render the SignUp modal */}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
    </nav>
  );
};

export default Navbar;
