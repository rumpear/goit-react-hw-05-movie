import { useFetch } from '../../hooks';
import { fetchTrendingMovies } from '../../services/movieApi';
import { Gallery } from '../../components/Gallery';
import { Loader } from '../../components/ui/Loader';
import { Title } from './HomePage.styled';

export const HomePage = () => {
  const [movies, loading, error] = useFetch(() => fetchTrendingMovies(), []);

  if (error) return <h1>{error}</h1>;
  if (loading) return <Loader />;

  return (
    <>
      <Title>Trending Movie</Title>
      {movies && <Gallery movies={movies.results} />}
    </>
  );
};
