import { Routes, Route, NavLink } from 'react-router-dom';

// import Home from 'path/to/pages/Home';
import NotFound from '../Pages/NotFound/NotFound';

import s from './app.module.css';

export const App = () => {
  return (
    <div className="container">
      <header>
        <nav className={s.nav}>
          <NavLink to="/" className={s.menuLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={s.menuLink}>
            Movies
          </NavLink>
        </nav>
      </header>
      <hr className={s.breakLine} />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
