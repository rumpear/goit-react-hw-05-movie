import { Route, Routes, useParams } from 'react-router-dom';
import { GoBackButton } from '../../components/ui/GoBackButton';
import { Loader } from '../../components/ui/Loader';
import { MovieDetailsInfo } from '../../components/MovieDetailsInfo';
import { useFetch } from '../../hooks';
import { fetchMovieById } from '../../services/movieApi';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, loading, error] = useFetch(
    () => fetchMovieById(movieId),
    [movieId]
  );

  if (error) return <h1>{error}</h1>;
  if (loading) return <Loader />;

  return (
    <>
      <GoBackButton />
      {movie && <MovieDetailsInfo movie={movie} />}
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};
