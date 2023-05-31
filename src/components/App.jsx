import React, { lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { NotFound } from './NotFound/NotFound';
import { MagnifyingGlass } from 'react-loader-spinner';
import css from './App.module.css';
import styled from 'styled-components';

const Home = lazy(() => import('../Pages/Home/Home.jsx'));
const Movies = lazy(() => import('../Pages/Movies/Movies.jsx'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails.jsx'));
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));

const App = () => {
  const StyledLink = styled(NavLink)`
    color: #e9e9e9;
    font-size: 30px;
    margin-left: 200px;

    &:last-child {
      margin-left: 50px;
    }
    &.active {
      color: orange;
    }
  `;

  return (
    <>
      <nav className={css.navigation}>
        <StyledLink className={css.styled} to="/" end>
          Home
        </StyledLink>

        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;