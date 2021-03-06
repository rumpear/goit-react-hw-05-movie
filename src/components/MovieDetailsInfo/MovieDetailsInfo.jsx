import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { checkPoster, getGenres } from '../../utils';
import {
  Wrapper,
  Link,
  Poster,
  PosterThumb,
  Details,
  Title,
  Table,
  Head,
  Data,
  Rating,
  RatingAccent,
  AboutSubtitle,
  AdditionalSubtitle,
  Overview,
} from './MovieDetailsInfo.styled';

export const MovieDetailsInfo = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <Wrapper>
        <PosterThumb>
          <Poster src={checkPoster(movie.poster_path)} alt={movie.title} />
        </PosterThumb>

        <Details>
          <Title>{movie.title}</Title>

          <Table>
            <tbody>
              <tr>
                <Head>Vote / Votes:</Head>
                <Data>
                  <Rating>{movie.vote_average}</Rating> /{' '}
                  <RatingAccent>{movie.vote_count}</RatingAccent>
                </Data>
              </tr>
              <tr>
                <Head>Popularity:</Head>
                <Data>{movie.popularity}</Data>
              </tr>
              <tr>
                <Head>Original title</Head>
                <Data>{movie.original_title}</Data>
              </tr>
              <tr>
                <Head>Release:</Head>
                <Data>{movie.release_date}</Data>
              </tr>
              <tr>
                <Head>Genre:</Head>
                <Data>
                  {movie.genres ? getGenres(movie.genres) : 'No genres'}
                </Data>
              </tr>
            </tbody>
          </Table>

          <AboutSubtitle>About</AboutSubtitle>
          <Overview>{movie.overview}</Overview>
        </Details>
      </Wrapper>

      <AdditionalSubtitle>Additional information</AdditionalSubtitle>
      <Link to={`cast`}>Cast</Link>
      <Link to={`reviews`}>Review</Link>
      <Outlet />
    </>
  );
};

MovieDetailsInfo.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    popularity: PropTypes.number,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array,
    overview: PropTypes.string,
  }),
};
