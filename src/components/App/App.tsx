import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Loader from "../Loader/Loader";

import Navigation from "../Navigation/Navigation";

const PageHome = lazy(() => import("../../pages/PageHome"));
const PageSearchMovies = lazy(() => import("../../pages/PageSearchMovies"));
const PageMovieDetails = lazy(() => import("../../pages/PageMovieDetails"));
const Cast = lazy(() => import("../Cast"));
const Reviews = lazy(() => import("../Reviews"));

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<PageHome />} />
          <Route path="/movies" element={<PageSearchMovies />} />
          <Route path="/movies/:movieId" element={<PageMovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
