import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/';
import { Section } from './ui/Section';

const HomePage = lazy(() =>
  import('../pages/HomePage/').then(module => ({
    default: module.HomePage,
  }))
);
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage').then(module => ({
    default: module.MoviesPage,
  }))
);
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage').then(module => ({
    default: module.MovieDetailsPage,
  }))
);
const Cast = lazy(() =>
  import('../pages/MovieDetailsPage/Cast').then(module => ({
    default: module.Cast,
  }))
);
const Reviews = lazy(() =>
  import('../pages/MovieDetailsPage/Reviews').then(module => ({
    default: module.Reviews,
  }))
);
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage').then(module => ({
    default: module.NotFoundPage,
  }))
);

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
