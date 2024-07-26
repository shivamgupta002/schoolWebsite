import React from 'react';

const Admissions = () => {
  return (
    <div className="container mx-auto p-6 lg:p-12">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">Admissions</h2>

      <section className="mb-12">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 text-center">Admission Process</h3>
        <p className="mb-6 text-gray-700 text-center">
          The admission process is straightforward. You can download the admission forms, fill them out, and submit them along with the required documents at the school office.
        </p>
        <div className="flex justify-center">
          <a
            href="/path-to-admission-form.pdf"
            download
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg shadow-lg transform hover:scale-105 hover:from-blue-600 hover:to-teal-600 transition-all duration-300 ease-in-out"
          >
            Download Admission Form
          </a>
        </div>
      </section>

      <section className="mb-12 bg-gradient-to-r from-green-100 to-blue-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 text-center">Admission Criteria</h3>
        <p className="text-gray-700 text-center">
          Admissions are based on merit and the availability of seats. Entrance tests may be conducted for certain grades to assess the student's knowledge and skills.
        </p>
      </section>

      <section className="bg-gradient-to-r from-yellow-100 to-orange-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 text-center">Important Dates</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Admission Form Availability: March 1st</li>
          <li>Last Date for Submission: March 31st</li>
          <li>Entrance Test: April 15th</li>
          <li>Announcement of Results: April 30th</li>
        </ul>
      </section>
    </div>
  );
};

export default Admissions;
