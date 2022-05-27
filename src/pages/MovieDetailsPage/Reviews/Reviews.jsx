import { useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks';
import { fetchMovieReviews } from '../../../services/movieApi';
import { ReviewsList } from '../../../components/ReviewsList';
import { Loader } from '../../../components/ui/Loader';

export const Reviews = () => {
  const { movieId } = useParams();
  const [data, loading, error] = useFetch(
    () => fetchMovieReviews(movieId),
    [movieId]
  );

  if (loading) return <Loader />;
  if (error) return <h1>{error}</h1>;

  return <>{data && <ReviewsList reviews={data.results} />}</>;
};
