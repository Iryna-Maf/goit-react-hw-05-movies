import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('../Pages/Home/HomePage'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Pages/MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('../Pages/MovieDetails/Reviews/Reviews'));
const NavMenu = lazy(() => import('./NavMenu/NavMenu'));
const NotFound = lazy(() => import('../Pages/NotFound/NotFound'));

export const App = () => {
  return (
    <div className="container">
      <NavMenu />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/Movies/:id" element={<MoviesDetails />}>
            <Route path="Cast" element={<Cast />} />
            <Route path="Reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
