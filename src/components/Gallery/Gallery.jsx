import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { checkPoster } from '../../utils';
import { List } from './Gallery.styled';

export const Gallery = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ original_title, id, poster_path }) => (
        <li key={id}>
          <Link
            to={location.pathname === '/movies' ? `${id}` : `/movies/${id}`}
            state={{ from: location }}
          >
            <img src={checkPoster(poster_path)} alt={movies.title}></img>
            {original_title}
          </Link>
        </li>
      ))}
    </List>
  );
};

Gallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      original_title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
