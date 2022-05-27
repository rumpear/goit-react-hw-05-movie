import { useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks';
import { CastList } from '../../../components/CastList/';
import { Loader } from '../../../components/ui/Loader';
import { fetchCast } from '../../../services/movieApi';

export const Cast = () => {
  const { movieId } = useParams();
  const [data, loading, error] = useFetch(() => fetchCast(movieId), [movieId]);

  if (loading) return <Loader />;
  if (error) return <h1>{error}</h1>;

  return <>{data && <CastList cast={data.cast}></CastList>}</>;
};
