import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from '../../services/movieApi';
import { Loader } from '../../components/ui/Loader';
import { SearchForm } from '../../components/SearchForm';
import { SearchGallery } from '../../components/SearchGallery';

export const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
  }, [query]);

  useEffect(() => {
    if (!search.get('query')) return;

    const getData = async () => {
      setLoading(true);
      try {
        const { results } = await fetchSearchMovie(search.get('query'));
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [search]);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <SearchForm onQuery={setQuery} onSearch={setSearch} />
      {loading ? <Loader /> : movies && <SearchGallery movies={movies} />}
    </>
  );
};
