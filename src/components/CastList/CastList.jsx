import PropTypes from 'prop-types';
import { checkProfilePhoto } from '../../utils';
import { Image, List, Item } from './CastList.styled';

export const CastList = ({ cast }) => {
  return (
    <>
      {cast.length ? (
        <List>
          {cast.map(({ id, name, character, profile_path }) => {
            return (
              <Item key={id}>
                <Image src={checkProfilePhoto(profile_path)} alt={name} />
                <p>{name}</p>
                <p>{character}</p>
              </Item>
            );
          })}
        </List>
      ) : (
        <p>Nothing to show</p>
      )}
    </>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};
