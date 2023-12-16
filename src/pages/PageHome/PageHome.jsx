import { useEffect } from "react";
import { useState } from "react";
import { getTrandingMovies } from "../../api/getMovies";
import {
  ContainerDiv,
  ItemImg,
  ItemInfoDiv,
  ItemRateSpan,
  ItemTitleH2,
  ListItemLi,
  ListUl,
} from "./PageHome.styled";
import noPoster from "../../images/noposter.jpg";
import { RoutItemLink } from "./PageHome.styled";

const PageHome = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    getTrandingMovies().then(setMovies);
  }, []);

  return (
    <ContainerDiv>
      <ListUl>
        {movies &&
          movies.map((movie) => (
            <ListItemLi key={movie.id}>
              <RoutItemLink to={`movies/${movie.id}`}>
                <div>
                  <ItemImg
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : noPoster
                    }
                    alt={movie.title}
                  />
                </div>
                <ItemInfoDiv>
                  <ItemTitleH2>{movie.title}</ItemTitleH2>
                  <ItemRateSpan>{movie.vote_average.toFixed(1)}</ItemRateSpan>
                </ItemInfoDiv>
              </RoutItemLink>
            </ListItemLi>
          ))}
      </ListUl>
    </ContainerDiv>
  );
};

export default PageHome;
