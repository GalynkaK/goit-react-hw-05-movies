import axios from 'axios';

const apiKey = '7c406e0461b4f259f1eed9475dcfb501';
const baseUrl = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
    language: 'en-US',
  },
});

export const getTrendingMovies = async (page) => {
  const request = `/trending/movie/week`;
  try {
    const { data } = await instance.get(request, {
      params: {
        page,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = async (id) => {
  const request = `/movie/${id}`;
  try {
    const { data } = await instance.get(request);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovieCast = async (id) => {
  const query = `/movie/${id}/credits`;
  try {
    const { data } = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovieReviews = async (id) => {
  const query = `/movie/${id}/reviews`;
  try {
    const { data } = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
};

export const searchMovie = async (requestString, page) => {
  const request = `/search/movie`;
  try {
    const { data } = await instance.get(request, {
      params: {
        query: requestString,
        page,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};