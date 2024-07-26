import React from 'react';

const Academics = () => {
  return (
    <div className="container mx-auto p-6 lg:p-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Academics</h2>

      <section className="mb-12">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Curriculum
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-gray-800">Primary Education</h4>
            <p className="text-gray-700 mt-2">
              Our primary curriculum focuses on foundational literacy and numeracy skills, along with holistic development.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-gray-800">Secondary Education</h4>
            <p className="text-gray-700 mt-2">
              The secondary curriculum builds on primary education with a strong emphasis on academic subjects and critical thinking.
            </p>
          </div>
          <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-gray-800">Senior Secondary Education</h4>
            <p className="text-gray-700 mt-2">
              Our senior secondary curriculum prepares students for higher education and professional careers with a focus on specialized subjects.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Subjects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-gray-800">Primary Level</h4>
            <p className="text-gray-700 mt-2">
              English, Mathematics, Science, Social Studies, Art, Physical Education.
            </p>
          </div>
          <div className="bg-gradient-to-r from-red-100 to-red-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-gray-800">Secondary Level</h4>
            <p className="text-gray-700 mt-2">
              English, Mathematics, Physics, Chemistry, Biology, History, Geography, Computer Science.
            </p>
          </div>
          <div className="bg-gradient-to-r from-teal-100 to-teal-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold text-gray-800">Senior Secondary Level</h4>
            <p className="text-gray-700 mt-2">
              Advanced Mathematics, Physics, Chemistry, Biology, Economics, Accountancy, Business Studies, Computer Science.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Teaching Methodologies
        </h3>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-6 text-center">
            We use a blend of traditional and modern teaching techniques to cater to different learning styles. Our methodologies include:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside space-y-2 text-gray-700">
            <li>Interactive classroom sessions</li>
            <li>Project-based learning</li>
            <li>Experiential learning through field trips and experiments</li>
            <li>Use of digital resources and e-learning platforms</li>
            <li>Regular assessments and feedback</li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Educational Resources
        </h3>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-6 text-center">
            Our school is equipped with state-of-the-art educational resources to enhance the learning experience:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-disc list-inside text-gray-700">
            <li>Digital classrooms with interactive whiteboards</li>
            <li>Access to online educational platforms and resources</li>
            <li>Well-equipped science and computer labs</li>
            <li>Library with a vast collection of books and journals</li>
            <li>Extracurricular facilities including sports and arts</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Academics;
