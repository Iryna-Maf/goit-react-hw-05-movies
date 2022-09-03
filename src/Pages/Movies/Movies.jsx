import { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import Searchbar from 'components/SearchBar/Searchbar';
import { getSearch } from 'components/API/api';
import Notiflix from 'notiflix';
import Button from 'components/Button/Button';

import s from './Movies.module.css';

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchSearch = async () => {
      await getSearch(searchValue).then(({ results }) => {
        if (results.length === 0) {
          Notiflix.Report.failure('No result found');
          return;
        }
        setSearchResult(results);
      });
    };
    if (searchValue) {
      fetchSearch();
    }
  }, [searchValue]);

  const submitValue = data => {
    setSearchParams({ query: data });
  };

  const renderMovies = searchResult.map(
    ({ poster_path, original_title, vote_average, id }) => (
      <li key={id} className={s.item}>
        <NavLink to={`/Movies/${id}`} className={s.item_link}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original/${poster_path}`
                : `https://static.vecteezy.com/system/resources/previews/003/393/235/original/error-404-with-the-cute-floppy-disk-mascot-free-vector.jpg`
            }
            alt=""
            height="300px"
          />
          <p className={s.title}>{original_title}</p>
          <p className={s.rating}>{vote_average.toFixed(2)}</p>
        </NavLink>
      </li>
    )
  );

  return (
    <div>
      {searchResult.length !== 0 && (
        <>
          <Button />
          <ul className={s.list}>{renderMovies}</ul>
        </>
      )}

      {searchResult.length === 0 && <Searchbar submitValue={submitValue} />}
    </div>
  );
};
export default Movies;
