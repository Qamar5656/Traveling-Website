import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import Button from "../Models/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  function onClick() {
    alert("Bilal clicked at the button ");
    console.log("button clicked");
  }
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-colors duration-300 bg-surface shadow`}
    >
      <div className="container mx-auto flex justify-between items-center p-6">
        {/* Logo */}
        <Link className="text-2xl font-bold text-primary cursor-pointer" to="/">
          Pak Railfan
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 lg:space-x-12 text-md md:text-md  lg:text-lg">
          {navItems.map(({ name, path }) => (
            <li key={path}>
              <Link to={path} className="nav-link font-bold cursor-pointer">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button text="Sign-Up" onClick={onClick} />

          <Button text="Sign-In" onClick={onClick} />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-surface cursor-pointer"
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
              <Button text="Sign-Up" />
            </li>
            <li>
              <Button text="Sign-In" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
