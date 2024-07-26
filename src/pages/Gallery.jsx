import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo } from '@fortawesome/free-solid-svg-icons';
import {photos } from "../assets/data/data";
// Dummy data


const videos = [
  { src: 'path/to/school_tour.mp4', title: 'Virtual tour of Springdale Public School' },
  { src: 'path/to/annual_function.mp4', title: 'Highlights from the Annual Function 2023' }
];

const Gallery = () => {
  const [selectedType, setSelectedType] = useState('photos');

  return (
    <div className="container mx-auto p-6 lg:p-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Gallery</h2>

      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 mr-4 ${selectedType === 'photos' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-lg shadow-md hover:bg-blue-600 transition duration-300`}
          onClick={() => setSelectedType('photos')}
        >
          <FontAwesomeIcon icon={faImage} className="mr-2" />
          Photos
        </button>
        <button
          className={`px-4 py-2 ${selectedType === 'videos' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-lg shadow-md hover:bg-blue-600 transition duration-300`}
          onClick={() => setSelectedType('videos')}
        >
          <FontAwesomeIcon icon={faVideo} className="mr-2" />
          Videos
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedType === 'photos' ? (
          photos.map((photo, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img src={photo.src} alt={photo.alt} className="w-full h-48 object-cover" />
              <p className="p-4 text-gray-700">{photo.alt}</p>
            </div>
          ))
        ) : (
          videos.map((video, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <video controls className="w-full h-48 object-cover">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="p-4 text-gray-700">{video.title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Gallery;
