import { Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/Home/HomePage';
import Movies from '../Pages/Movies/Movies';
import NavMenu from './NavMenu/NavMenu';
import NotFound from '../Pages/NotFound/NotFound';

export const App = () => {
  return (
    <div className="container">
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
