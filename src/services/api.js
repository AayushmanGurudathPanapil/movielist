const API_KEY = "1c45571be35cbec310ab5ed08fae8106";
const BASE_URL = "https://api.themoviedb.org/3";

// both functions now accept an optional page parameter and return the full
// TMDB response so callers can inspect total_pages, etc.
export const getPopularMovies = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`,
  );
  const data = await response.json();
  return data; // caller will pick data.results and data.total_pages
};

export const searchMovies = async (query, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query,
    )}&page=${page}`,
  );
  const data = await response.json();
  return data;
};
