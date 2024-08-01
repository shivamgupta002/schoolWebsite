import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import schoolLogo from "../assets/image/school-logo.png";
import hamburger from "../assets/image/hamburger.png";
import close from "../assets/image/close.png";

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/faculty", label: "Faculty" },
    { path: "/admissions", label: "Admissions" },
    { path: "/academics", label: "Academics" },
    { path: "/students", label: "Students" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <img
                  src={close}
                  alt="close"
                  // style={{ height: "40px", width: "30px",border:"none" }}
                  className="h-10 w-8 focus:border-none"
                  />
                ) : (
                  <img
                  src={hamburger}
                  alt="menu"
                  // style={{ height: "40px", width: "30px",border:"none" }}
                  className="h-10 w-8 focus:border-none"
                />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="flex items-center text-2xl font-bold text-blue-600"
              >
                <img
                  src={schoolLogo}
                  alt="School Logo"
                  className="w-8 h-8 mr-2"
                  loading="lazy"
                />
                SPS
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-slate-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:text-blue-600 hover:bg-gray-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
