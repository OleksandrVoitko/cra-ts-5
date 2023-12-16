import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api/getMovies";
import noPoster from "../../images/noposter.jpg";
import { ListUl, ListItemLi, ItemImg, ItemNameP } from "./Cast.styled";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const urlActorImg = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <ListUl>
          {cast.map((actor) => (
            <ListItemLi key={actor.id}>
              <ItemImg
                src={
                  actor.profile_path
                    ? `${urlActorImg}${actor.profile_path}`
                    : noPoster
                }
                alt={actor.name}
                width="100"
              />
              <ItemNameP>{actor.name}</ItemNameP>
              <p>Character: {actor.character}</p>
            </ListItemLi>
          ))}
        </ListUl>
      )}
    </>
  );
}
