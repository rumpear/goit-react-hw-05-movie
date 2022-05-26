import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/';
import { Section } from './ui/Section';
import { HomePage } from '../views/HomePage';
import { MoviesPage } from '../views/MoviesPage';
import { MovieDetailsPage } from '../views/MovieDetailsPage';
import { Cast } from '../views/MovieDetailsPage/Cast';
import { Reviews } from '../views/MovieDetailsPage/Reviews/';
import { NotFoundPage } from '../views/NotFoundPage';

const App = () => (
  <Section>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Section>
);

export default App;
