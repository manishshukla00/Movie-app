import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="p-4 border rounded-md">
      <img src={movie.Poster} alt={movie.Title} className="w-[100%] h-[800px] md:h-[400px] my-4 height-[20px] mx-auto mb-2" />
      <h2 className="text-2xl mb-2 font-semibold">{movie.Title}</h2>
      <p className="text-lg text-gray-600">{movie.Year}</p>
    </div>
  );
};

export default MovieCard;