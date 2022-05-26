import { checkProfilePhoto } from '../../utils';
import { Image, List, Item } from './CastList.styled';

export const CastList = ({ cast }) => {
  return (
    <List>
      {cast.length ? (
        cast.map(({ id, name, character, profile_path }) => {
          return (
            <Item key={id}>
              <Image src={checkProfilePhoto(profile_path)} alt={name} />
              <p>{name}</p>
              <p>{character}</p>
            </Item>
          );
        })
      ) : (
        <p>Nothing to show</p>
      )}
    </List>
  );
};
