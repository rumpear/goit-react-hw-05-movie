import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/';
import { Section } from './ui/Section';

const addLazy = componentName =>
  lazy(() =>
    import(`../pages/${componentName}/`).then(module => ({
      default: module[componentName],
    }))
  );

const HomePage = addLazy('HomePage');
const MoviesPage = addLazy('MoviesPage');
const MovieDetailsPage = addLazy('MovieDetailsPage');
const NotFoundPage = addLazy('NotFoundPage');

const App = () => (
  <Section>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Section>
);

export default App;
