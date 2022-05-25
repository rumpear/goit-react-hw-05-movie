import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchMovieReviews,
  IMAGE_PATH_PROFILE,
} from '../../../services/movieApi';
import { checkAvatarPath } from '../../../utils';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async movieId => {
      const { results } = await fetchMovieReviews(movieId);
      console.log(results);
      setReviews(results);
    };
    getReviews(movieId);
  }, [movieId]);

  // if (!reviews.length) return;

  return (
    <>
      <ul>
        {/* {reviews.map(
          ({ author, author_details, content, created_at, id, url }) => (
            <li key={id}>
              <img
                src={checkAvatarPath(author_details.avatar_path)}
                alt={author_details.username}
              />
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ),
        )} */}

        {reviews.length ? (
          reviews.map(
            ({ author, author_details, content, created_at, id, url }) => (
              <li key={id}>
                <img
                  src={checkAvatarPath(author_details.avatar_path)}
                  alt={author_details.username}
                />
                <p>{author}</p>
                <p>{content}</p>
              </li>
            ),
          )
        ) : (
          <h2>Nothing to show</h2>
        )}
      </ul>
    </>
  );
};
