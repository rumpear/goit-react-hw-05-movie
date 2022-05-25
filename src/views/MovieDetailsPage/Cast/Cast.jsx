import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../components/Loader';
import { useFetch } from '../../../hooks';
import { fetchCast } from '../../../services/movieApi';
import { checkProfilePhoto } from '../../../utils';
import { Image, List, Item } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [data, loading, error] = useFetch(() => fetchCast(movieId), [movieId]);

  if (loading) return <Loader />;
  if (error) return <h1>{error}</h1>;
  // if (!data) return;
  console.log(data, 'Cast');

  return (
    <>
      <List>
        {data && data.cast.length ? (
          data.cast.map(({ id, name, character, profile_path }) => {
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
      {/* {data && <Gallery cast={data.cast}></Gallery>} */}
    </>
  );
};

// const Gallery = ({ cast }) => {
//   console.log(cast, 'hee');
//   return (
//     // <h1>{'hee'}</h1>
//     <List>
//       {cast ? (
//         cast.map(({ id, name, character, profile_path }) => {
//           return (
//             <Item key={id}>
//               <Image src={checkProfilePhoto(profile_path)} alt={name} />
//               <p>{name}</p>
//               <p>{character}</p>
//             </Item>
//           );
//         })
//       ) : (
//         <h2>Nothing to show</h2>
//       )}
//     </List>
//   );
// };
