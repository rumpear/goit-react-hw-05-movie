import { Link, useLocation } from 'react-router-dom';
import { checkPoster } from '../../utils';
import { List } from './SearchGallery.styled';

export const SearchGallery = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies &&
        movies.map(({ original_title, id, poster_path }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <img src={checkPoster(poster_path)} alt={movies.title}></img>
                {original_title}
              </Link>
            </li>
          );
        })}
    </List>
  );
};
