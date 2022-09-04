import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'components/API/api';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchMovieReviews = async () => {
      await getMovieReviews(id).then(({ results }) => {
        setReviews(results);
      });
    };
    if (id) {
      fetchMovieReviews();
    }
  }, [id]);
  const renderReviews = reviews.map(({ author, content, id }) => (
    <li key={id}>
      <h4>Author: {author}</h4>
      <p>{content}</p>
    </li>
  ));
  return (
    <>
      {reviews.length !== 0 ? (
        <ul>{renderReviews}</ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
