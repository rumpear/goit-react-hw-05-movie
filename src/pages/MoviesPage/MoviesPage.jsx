import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from '../../services/movieApi';
import { Loader } from '../../components/ui/Loader';
import { SearchForm } from '../../components/SearchForm';
import { Gallery } from '../../components/Gallery/';

export const MoviesPage = () => {
  const [search, setSearch] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = search.get('query');

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      setLoading(true);
      try {
        const { results } = await fetchSearchMovie(query);
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [query, search]);

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <SearchForm onSearch={setSearch} query={query} />
      {loading ? <Loader /> : movies && <Gallery movies={movies} />}
    </>
  );
};
