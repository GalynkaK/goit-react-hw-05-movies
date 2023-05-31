import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MagnifyingGlass } from 'react-loader-spinner';
import { getTrendingMovies } from 'components/Service/Api';
import Paginator from 'components/Paginator/Paginator';

const imgPlaceholder = '/src/img/noMovieImg.jpg';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const location = useLocation();

  const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);

  const page = Number(params.page || 1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies(page);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [page]);

  return (
    <>
      <h2 className="mainTitle">Trending movies:</h2>
      <ul className="listMovies">
        {loading ? (
          <div className="loading">
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="MagnifyingGlass-loading"
              style={{ margin: '0 auto' }}
              className="MagnifyingGlass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          </div>
        ) : (
          movies.map(({ title, id, poster_path }) => (
            <li key={id} className="movieItem">
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img
                  className="poster"
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : imgPlaceholder
                  }
                  alt={title}
                />
                <p className="title">{title}</p>
              </Link>
            </li>
          ))
        )}
      </ul>

      <Paginator
        totalPages={totalPages}
        setSearchParams={setSearchParams}
        params={params}
        currentPage={Number(params?.page - 1) || 0}
      />
    </>
  );
};

export default Home;