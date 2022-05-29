import PropTypes from 'prop-types';
import { checkAvatarPath } from '../../utils';
import { Image, List, Item, AuthorWrapper } from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <>
      {reviews.length ? (
        <List>
          {reviews.map(({ author, author_details, content, id }) => (
            <Item key={id}>
              <p>{content}</p>
              <AuthorWrapper>
                <Image
                  src={checkAvatarPath(author_details.avatar_path)}
                  alt={author_details.username}
                />
                <p>{author}</p>
              </AuthorWrapper>
            </Item>
          ))}
        </List>
      ) : (
        <p>Nothing to show</p>
      )}
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      author_details: PropTypes.shape({
        avatar_path: PropTypes.string,
        username: PropTypes.string.isRequired,
      }),
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
