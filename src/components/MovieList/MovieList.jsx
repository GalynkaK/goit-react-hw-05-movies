import React from 'react';
import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies, location }) => {
  return (
    <ul className={css.listMovies}>
      {movies.map(({ title, id }) => (
        <li className={css.movieItem} key={id}>
          <Link className={css.link} to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;