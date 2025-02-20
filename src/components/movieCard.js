import React from 'react';

const MovieCard = ({ movie, onClick }) => (
  <div 
    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200"
    onClick={onClick}
  >
    <img 
      src={movie.image} 
      alt={movie.name} 
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">{movie.name}</h2>
      <p className="text-gray-600 text-sm">{movie.year}</p>
    </div>
  </div>
);

export default MovieCard;
