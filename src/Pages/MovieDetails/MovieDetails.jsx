import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'components/API/api';
import Button from 'components/Button/Button';

import s from './MovieDetails.module.css';

const MoviesDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      await getMovieDetails(id).then(data => {
        setDetails(data);
      });
    };
    if (id) {
      fetchMovieDetails();
    }
  }, [id]);
  const {
    poster_path,
    original_title,
    overview,
    genres,
    release_date,
    vote_average,
  } = details;

  return (
    <div>
      <Button />
      <div className={s.details}>
        <div className={s.details_img}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original/${poster_path}`
                : `https://static.vecteezy.com/system/resources/previews/003/393/235/original/error-404-with-the-cute-floppy-disk-mascot-free-vector.jpg`
            }
            alt=""
            height="400px"
          />
        </div>
        <div>
          <h2>
            {original_title} ({Number.parseInt(release_date)})
          </h2>
          <p>User Score: {(vote_average * 10).toFixed(0)} %</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres?.map(el => el.name + ' ')}</p>
        </div>
      </div>
      <h3>Additional information</h3>
      <ul className={s.list}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.list_Link} ${s.active}` : `${s.list_Link}`
            }
            to="Cast"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.list_Link} ${s.active}` : `${s.list_Link}`
            }
            to="Reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MoviesDetails;
