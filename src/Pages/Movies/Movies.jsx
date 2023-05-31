import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MagnifyingGlass } from 'react-loader-spinner';
import { searchMovie } from 'components/Service/Api';
import Paginator from 'components/Paginator/Paginator';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = Number(searchParams.get('page')) || 1;
  const query = searchParams.get('query') || '';

  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setLoading(true);
        const { results, total_pages } = await searchMovie(query, page);
        setMovies(results);
        setError(null);
        setTotalPages(total_pages);
      } catch (error) {
        setError('An error occurred. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchQuery = e.target.elements.search.value.trim();
    if (searchQuery === '') {
      e.target.reset();
      return;
    }
    const newSearchParams = new URLSearchParams();
    newSearchParams.set('query', searchQuery);
    newSearchParams.set('page', '1');
    window.location.search = newSearchParams.toString();
    e.target.reset();
  };

  return (
    <>
      <div>
        <h2>Search movies:</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={inputValue}
            onChange={handleChange}
            name="search"
            type="text"
            placeholder="Type here"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <ul>
        {loading ? (
          <div>
            <MagnifyingGlass visible={true} height={80} width={80} />
          </div>
        ) : movies.length > 0 ? (
          movies.map(({ title, id, poster_path }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))
        ) : (
          <p>
            {error
              ? error
              : 'No movies with this title were found. Try entering another title.'}
          </p>
        )}
      </ul>
      <Paginator
        totalPages={totalPages}
        setSearchParams={() => { }}
        params={{ query, page }}
        currentPage={Number(page - 1) || 0}
      />
    </>
  );
};

export default Movies;