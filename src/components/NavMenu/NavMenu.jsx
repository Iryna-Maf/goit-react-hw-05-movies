import { NavLink } from 'react-router-dom';

import s from '../NavMenu/NavMenu.module.css';

const getClassName = ({ isActive }) => {
  return isActive ? `${s.menuLink} ${s.active}` : s.menuLink;
};

const NavMenu = () => {
  return (
    <header>
      <nav className={s.nav}>
        <NavLink to="/" className={getClassName}>
          Home
        </NavLink>
        <NavLink to="/movies" className={getClassName}>
          Movies
        </NavLink>
      </nav>
      <hr className={s.breakLine} />
    </header>
  );
};

export default NavMenu;
