import React, { useState } from 'react';
import FetchMovies from './FetchMovies';
import MovieCard from './MovieCard';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const results = await FetchMovies(query);
    setMovies(results);
  };

  return (
    <div className="p-8 text-center">
      <input
        className="m-auto p-4 mx-2 rounded-md border"
        type="text"
        placeholder="Search Movie...."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="mt-2 p-4 bg-blue-500 text-white rounded-md"
        onClick={handleSearch}
      >
        Search
      </button>
      <div className="grid sm:grid-col-2 md:grid-cols-4 gap-4 mt-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;