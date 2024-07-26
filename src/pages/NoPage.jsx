import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa'; // Import a Font Awesome icon
import error from "../assets/image/404.png";

const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <div className="text-6xl text-red-500 mb-4">
        <FaExclamationTriangle />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-6">
        Sorry, the page you're looking for does not exist.
      </p>
      <img
        src={error} // Replace with your 404 image URL
        alt="404 Not Found"
        className="w-64 h-auto rounded-lg shadow-md"
      />
    </div>
  );
};

export default NoPage;
