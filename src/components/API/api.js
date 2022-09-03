const axios = require('axios').default;

const API_KEY = 'c6caf7e5f50b929f8a8910b21b8bfd4f';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrending = async page => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: {
      api_key: API_KEY,
      page,
    },
  });

  return data;
};

export const getSearch = async query => {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });

  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data;
};

export const getMovieCredits = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data;
};
