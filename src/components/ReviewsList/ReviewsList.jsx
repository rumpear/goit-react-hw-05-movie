import { checkAvatarPath } from '../../utils';
import { Image, List, Item, AuthorWrapper } from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <List>
      {reviews.length ? (
        reviews.map(({ author, author_details, content, id }) => (
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
        ))
      ) : (
        <h2>Nothing to show</h2>
      )}
    </List>
  );
};
