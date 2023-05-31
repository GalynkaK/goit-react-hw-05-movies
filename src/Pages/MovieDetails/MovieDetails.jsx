// import { Link, Outlet, useLocation, useParams, Suspense, useEffect, useState } from 'react-router-dom';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { getMovieDetails } from 'components/Service/Api';
import { useEffect, useState } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Suspense } from 'react';


const MovieDetails = () => {
  const { movieId } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const movieData = await getMovieDetails(movieId);
        setData(movieData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  const getYear = releaseData => {
    const date = new Date(releaseData);
    return date.getFullYear();
  };

  const getGenres = () => {
    return data.genres.map(genre => genre.name).join(', ');
  };

  const location = useLocation();

  const cameBack = location.state?.from || '/';

  return (
    <>
      <Link className={css.button} to={cameBack}>
        Go Back
      </Link>
      {loading ? (
        <div className={css.loading}>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{ margin: '0 auto' }}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      ) : (
        <>
          <div className={css.imgWrap}>
            {data.poster_path ? (
              <img className={css.image} alt={data.original_title} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
            ) : (
              <img className={css.image} src="/src/img/noMovieImg.jpg" alt="not available" />
            )}
            <div className={css.wrapper}>
              <h1>
                {data.original_title} ({getYear(data.release_date)})
              </h1>
              <p className={css.paragraph}>User Score: {Math.floor(data.vote_average * 10)}%</p>
              <p className={css.paragraph}>Overview</p>
              <p>{getGenres()}</p>
            </div>
            <div>
              <ul className={css.list}>
                <li>
                  <Link to={`${movieId}/cast`} state={{ from: cameBack }}>
                    <button className={css.castButton}>Cast</button>
                  </Link>
                </li>
                <li>
                  <Link to={`${movieId}/reviews`} state={{ from: cameBack }}>
                    <button className={css.reviews}>Reviews</button>
                  </Link>
                </li>
              </ul>
            </div>
            <Suspense
              fallback={
                <div className={css.loading}>
                  <MagnifyingGlass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="MagnifyingGlass-loading"
                    wrapperStyle={{ margin: '0 auto' }}
                    wrapperClass="MagnifyingGlass-wrapper"
                    glassColor="#c0efff"
                    color="#e15b64"
                  />
                </div>
              }
            >
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;