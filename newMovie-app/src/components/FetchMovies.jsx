import axios from 'axios';

const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=d2a885bd`;

const fetchMovies = async (query) => {
  try {
    const response = await axios.get(`${apiUrl}&s=${query}`);
    return response.data.Search;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export default fetchMovies;