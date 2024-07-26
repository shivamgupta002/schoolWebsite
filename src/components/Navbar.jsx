import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import schoolLogo from "../assets/image/school-logo.png"; // Ensure you have a school logo in the assets folder

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

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
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center text-2xl font-bold text-blue-600">
                <img
                  src={schoolLogo}
                  alt="School Logo"
                  className="w-8 h-8 mr-2"
                  loading="lazy" // Lazy load the logo image
                />
                SPS
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {["/", "/about", "/faculty", "/admissions", "/academics", "/students", "/gallery", "/contact"].map((path, index) => (
                  <Link
                    key={index}
                    to={path}
                    className="text-slate-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {["Home", "About Us", "Faculty", "Admissions", "Academics", "Students", "Gallery", "Contact"][index]}
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
          {["/", "/services", "/about", "/why-us", "/testimonials", "/blog", "/contact"].map((path, index) => (
            <Link
              key={index}
              to={path}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:text-blue-600 hover:bg-gray-100"
            >
              {["Home", "Services", "About Us", "Why Us", "Testimonials", "Blog", "Contact"][index]}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
