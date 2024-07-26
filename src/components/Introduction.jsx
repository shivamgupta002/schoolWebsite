import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import { motion } from "framer-motion";
import schoolLogo from "../assets/image/school-logo.png"; // Ensure you have a school logo in the assets folder

const Introduction = () => {
  return (
    <motion.div
      className="container mx-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center mb-8">
        <img
          src={schoolLogo}
          alt="School Logo"
          className="mx-auto w-32 h-32 mb-4"
        />
        <h1 className="text-4xl font-bold text-slate-800">Springdale Public School</h1>
        <p className="text-lg mt-4 text-gray-600">
          Welcome to Springdale Public School, where we nurture young minds for
          a brighter future. Our mission is to provide quality education and
          holistic development to every student.
        </p>
      </div>

      <div className="mb-8">
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          <div>
            <img
              src="https://parade.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMDA2ODgxNzkzMTQ5/sports-trivia-1-jpg.jpg"
              alt="Highlight 1"
              className="w-full h-64 object-cover"
            />
            <p className="legend bg-transparent">Highlight 1: Annual Sports Day</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1614508568879-876f2cde2237?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Highlight 2"
              className="w-full h-64 object-cover"
            />
            <p className="legend bg-transparent">Highlight 2: Science Exhibition</p>
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1702088079938-4d9709e7835f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Highlight 3"
              className="w-full h-64 object-cover"
            />
            <p className="legend bg-transparent">Highlight 3: Art and Culture Fest</p>
          </div>
        </Carousel>
      </div>

      
    </motion.div>
  );
};

export default Introduction;

