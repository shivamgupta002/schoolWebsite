import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faPaintBrush, faRobot, faGlobe, faBook, faCode, faAward, faTrophy, faStar } from '@fortawesome/free-solid-svg-icons';

const Students = () => {
  return (
    <div className="container mx-auto p-6 lg:p-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Student Life</h2>

      <section className="mb-12">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Extracurricular Activities
        </h3>
        <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-6 text-center">
            At Springdale, we believe in a well-rounded education that includes a variety of extracurricular activities to enrich students' lives. Our offerings include:
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faMusic} className="text-blue-500 text-3xl" />
              <span className="text-gray-600 text-lg">Music</span>
            </div>
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faPaintBrush} className="text-blue-500 text-3xl" />
              <span className="text-gray-600 text-lg">Art</span>
            </div>
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faRobot} className="text-blue-500 text-3xl" />
              <span className="text-gray-600 text-lg">Robotics</span>
            </div>
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faGlobe} className="text-blue-500 text-3xl" />
              <span className="text-gray-600 text-lg">Debate Club</span>
            </div>
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faStar} className="text-blue-500 text-3xl" />
              <span className="text-gray-600 text-lg">Dance</span>
            </div>
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faStar} className="text-blue-500 text-3xl" />
              <span className="text-gray-600 text-lg">Sports</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Clubs and Societies
        </h3>
        <div className="bg-green-50 p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-6 text-center">
            Our school hosts a range of clubs and societies designed to foster interests and skills outside the classroom. These include:
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faBook} className="text-green-500 text-3xl" />
              <span className="text-gray-600 text-lg">Literary Society</span>
            </div>
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faGlobe} className="text-green-500 text-3xl" />
              <span className="text-gray-600 text-lg">Environmental Club</span>
            </div>
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faGlobe} className="text-green-500 text-3xl" />
              <span className="text-gray-600 text-lg">Astronomy Club</span>
            </div>
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faCode} className="text-green-500 text-3xl" />
              <span className="text-gray-600 text-lg">Coding Club</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Achievements and Accolades
        </h3>
        <div className="bg-yellow-50 p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-6 text-center">
            Our students have consistently achieved excellence in various fields. Here are some of our recent accolades:
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-3xl" />
              <span className="text-gray-600 text-lg">National Robotics Competition</span>
            </div>
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faAward} className="text-yellow-500 text-3xl" />
              <span className="text-gray-600 text-lg">Regional Dance Festival</span>
            </div>
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-3xl" />
              <span className="text-gray-600 text-lg">National Debate Championship</span>
            </div>
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-3xl" />
              <span className="text-gray-600 text-lg">State Sports Meet</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Student Council and Leadership
        </h3>
        <div className="bg-teal-50 p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-6 text-center">
            The Student Council offers numerous leadership opportunities for students to develop their organizational and leadership skills. Our council includes:
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faStar} className="text-teal-500 text-3xl" />
              <span className="text-gray-600 text-lg">President</span>
            </div>
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faStar} className="text-teal-500 text-3xl" />
              <span className="text-gray-600 text-lg">Vice President</span>
            </div>
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faStar} className="text-teal-500 text-3xl" />
              <span className="text-gray-600 text-lg">Secretary</span>
            </div>
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faStar} className="text-teal-500 text-3xl" />
              <span className="text-gray-600 text-lg">Treasurer</span>
            </div>
            <div className="flex items-center space-x-3 w-1/2 sm:w-1/4 lg:w-1/5">
              <FontAwesomeIcon icon={faStar} className="text-teal-500 text-3xl" />
              <span className="text-gray-600 text-lg">Event Coordinators</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;
