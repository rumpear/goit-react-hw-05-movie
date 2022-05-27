import { useParams } from 'react-router-dom';
import { GoBackButton } from '../../components/ui/GoBackButton';
import { Loader } from '../../components/ui/Loader';
import { MovieDetailsInfo } from '../../components/MovieDetailsInfo';
import { useFetch } from '../../hooks';
import { fetchMovieById } from '../../services/movieApi';

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
    </>
  );
};
