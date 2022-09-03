import { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import s from './Searchbar.module.css';

const Searchbar = ({ submitValue }) => {
  const [search, setSearch] = useState('');

  const searchInput = ({ target }) => {
    setSearch(target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (search === '') {
      Notiflix.Notify.warning('Please enter name of the film');
      return;
    }
    submitValue(search);
    reset();
  };
  const reset = () => {
    setSearch('');
  };

  return (
    <form onSubmit={onSubmit} className={s.form}>
      <label>
        <input
          className={s.input}
          type="text"
          value={search}
          name="search"
          onChange={searchInput}
        />
      </label>
      <button type="submit" className={s.btn}>
        Search
      </button>
    </form>
  );
};

Searchbar.propTypes = {
  submitValue: PropTypes.func.isRequired,
};

export default Searchbar;
