import { useState, useEffect } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import {
  ButtonsDiv,
  FirstTitleH1,
  MovieInfoDiv,
  RateSpan,
  RouteButtonNavLink,
  SecondTitleH2,
  ThirdTitleH3,
  WrapperDiv,
  WrapperImgDiv,
  WrapperInfoDiv,
} from "./PageMovieDetails.styled";
import { getMovieDetails } from "../../api/getMovies";

export default function PageMovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  let location = useLocation();
  console.log(location);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <WrapperDiv>
          <WrapperImgDiv>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movieId}
            />
            <WrapperInfoDiv>
              <FirstTitleH1>
                {movie.original_title} ({movie.release_date.slice(0, 4)})
              </FirstTitleH1>
              <p>
                User Score: <RateSpan>{movie.vote_average}</RateSpan>{" "}
              </p>
              <SecondTitleH2>Overview</SecondTitleH2>
              <p>{movie.overview}</p>
              <ThirdTitleH3>
                {movie.genres.map((genre) => genre.name + " ")}
              </ThirdTitleH3>
            </WrapperInfoDiv>
          </WrapperImgDiv>
          <ButtonsDiv>
            <RouteButtonNavLink to={location?.state?.from ?? "/"}>
              Go back
            </RouteButtonNavLink>
            <MovieInfoDiv>
              <RouteButtonNavLink
                to="reviews"
                state={{ from: location?.state?.from ?? "/" }}
              >
                Reviews
              </RouteButtonNavLink>
              <RouteButtonNavLink
                to="cast"
                state={{ from: location?.state?.from ?? "/" }}
              >
                Cast
              </RouteButtonNavLink>
            </MovieInfoDiv>
          </ButtonsDiv>

          <Outlet />
        </WrapperDiv>
      )}
    </>
  );
}
