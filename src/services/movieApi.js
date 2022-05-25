import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: '5e25dc89cc9570e2f881766abec20685' };

export const fetchTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day');
  return response.data;
};

export const fetchMovieById = async id => {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
};

export const fetchCast = async id => {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data;
};

export const fetchMovieReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data;
};

export const fetchSearchMovie = async query => {
  const response = await axios.get(`/search/movie`, { params: { query } });
  return response.data;
};
