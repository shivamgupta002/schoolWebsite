import React, { Suspense, lazy } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Introduction = lazy(() => import("../components/Introduction"));

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6147276/pexels-photo-6147276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
          <h1 className="text-5xl font-bold mb-4">Springdale Public School</h1>
          <p className="text-2xl mb-6">The Best School for Quality Education</p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to="/tour"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Take A Tour
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Information Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "fas fa-university", title: "University Life", description: "Overall in here" },
            { icon: "fas fa-graduation-cap", title: "Graduation", description: "Getting Diploma" },
            { icon: "fas fa-running", title: "Athletics", description: "Sport Clubs" },
            { icon: "fas fa-users", title: "Social", description: "Overall in here" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
            >
              <i className={`${item.icon} text-4xl text-blue-600 mb-4`}></i>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <Suspense fallback={<div>Loading...</div>}>
        <Introduction />
      </Suspense>

      {/* About Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">About Our School</h2>
          <p className="text-lg max-w-3xl mx-auto">
            We are one of the largest, most diverse schools in the USA with over
            50,000 students in the USA, and a further 36,000 studying across 180
            countries for Springdale Public School. Springdale was established
            by an act of the USA Legislature on 1 June 1950, amalgamating
            various institutions and colleges.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
