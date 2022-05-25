import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../../services/movieApi';
import { checkProfilePhoto } from '../../../utils';
import { Loader } from '../../../components/Loader';
import { Image, List, Item } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCast = async movieId => {
      setLoading(true);
      try {
        const { cast } = await fetchCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCast(movieId);
  }, [movieId]);

  console.log(cast, 'Cast');

  if (loading) return <Loader />;
  if (error) return <h1>{error}</h1>;

  return (
    <>
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
          <h2>Nothing to show</h2>
        )}
      </List>
    </>
  );
};
