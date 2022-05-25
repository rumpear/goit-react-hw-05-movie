import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { fetchMovieById, IMAGE_PATH_POSTER } from '../../services/movieApi';

const useFetch = (request, deps) => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const data = await request();
        // console.log('useEffect', data);
        setState(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, deps);
  // console.log(state, 'after useEffect');
  return [state, loading, error];
};

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  // const [movie, setMovie] = useState([]);

  const [movie, loading, error] = useFetch(
    () => fetchMovieById(movieId),
    [movieId],
  );

  console.log(movie, 'MovieDetailsPage');
  // console.log(loading);
  // console.log(error);

  // useEffect(() => {
  //   const getMovieById = async movieId => {
  //     // console.log(movieId, 'movieId Page');
  //     const results = await fetchMovieById(movieId);
  //     // console.log(results);
  //     setMovie(results);
  //   };
  //   getMovieById(movieId);
  // }, [movieId]);

  if (error) return <h1>{error}</h1>;

  if (loading) return <Loader />;

  // if (movie) {
  //   const { genres, title, vote_average, popularity, overview, poster_path } =
  //     movie;
  //   const getGenres = genres => genres.map(genre => genre.name).join(', ');
  //   // console.log(poster_path);
  //   const path = IMAGE_PATH_POSTER + poster_path;
  //   return (
  //     <div>
  //       <p>title: {title}</p>
  //       <p>overview: {overview}</p>
  //       {genres && <p>genres: {getGenres(genres)}</p>}

  //       <p>vote_average: {vote_average}</p>
  //       <p>popularity: {popularity}</p>
  //       <img src={path} alt={title}></img>
  //     </div>
  //   );
  // }

  // const { genres, title, vote_average, popularity, overview, poster_path } =
  //   movie;
  const getGenres = genres => genres.map(genre => genre.name).join(', ');

  // // console.log(poster_path);
  // const path = IMAGE_PATH_POSTER + poster_path;
  // console.log(path);

  // path ? src={path} : src={noPhoto}

  return (
    <>
      <h1>MovieDetailsPage: {movieId}</h1>
      {movie && (
        <div>
          <p>title: {movie.title}</p>
          <p>overview: {movie.overview}</p>
          {movie.genres && <p>genres: {getGenres(movie.genres)}</p>}

          <p>vote_average: {movie.vote_average}</p>
          <p>popularity: {movie.popularity}</p>
          <img
            src={IMAGE_PATH_POSTER + movie.poster_path}
            alt={movie.title}
          ></img>
        </div>
      )}
      <p>Additional information</p>

      <Link to={`cast`}>Cast</Link>
      <Link to={`reviews`}>Review</Link>

      <Outlet />
    </>
  );
};
