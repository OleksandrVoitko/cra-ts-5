import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

const PageHome = lazy(() => import("../../pages/PageHome"));
const PageSearchMovies = lazy(() => import("../../pages/PageSearchMovies"));
const PageMovieDetails = lazy(() => import("../../pages/PageMovieDetails"));
const Cast = lazy(() => import("../Cast"));
const Reviews = lazy(() => import("../Reviews"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<PageHome />} />
        <Route path="/movies" element={<PageSearchMovies />} />
        <Route path="/movies/:movieId" element={<PageMovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
