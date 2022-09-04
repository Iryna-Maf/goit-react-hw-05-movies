import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrending } from 'components/API/api';

import s from '../Home/HomePage.module.css';

const HomePage = () => {
  const [filmList, setFilmList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTrending = async () => {
      await getTrending(page).then(({ results }) => {
        setFilmList(results);
      });
    };
    fetchTrending();
  }, [page]);

  const renderMovies = filmList.map(
    ({ poster_path, original_title, vote_average, id }) => (
      <li key={id} className={s.item}>
        <NavLink to={`/Movies/${id}`} className={s.item_link}>
          <div>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original/${poster_path}`
                  : `https://static.vecteezy.com/system/resources/previews/003/393/235/original/error-404-with-the-cute-floppy-disk-mascot-free-vector.jpg`
              }
              alt=""
              height="300px"
            />
          </div>

          <p className={s.title}>{original_title}</p>
          <p className={s.rating}>{vote_average.toFixed(2)}</p>
        </NavLink>
      </li>
    )
  );

  return (
    <>
      <h2>Trending today</h2>
      <ul className={s.list}>{renderMovies}</ul>
      <div className={s.thumb}>
        {page !== 1 && (
          <button
            className={s.btn}
            type="button"
            onClick={() => setPage(page - 1)}
          >
            Previos page
          </button>
        )}

        <button
          className={s.btn}
          type="button"
          onClick={() => setPage(page + 1)}
        >
          Next page
        </button>
      </div>
    </>
  );
};

export default HomePage;
