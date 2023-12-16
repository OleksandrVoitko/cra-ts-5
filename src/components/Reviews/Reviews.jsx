import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/getMovies";
import { ReviewP } from "./Reviews.styled";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then((response) => response.results)
      .then(setReviews);
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id}>
            <h3>{review.author}</h3>
            <ReviewP>{review.content}</ReviewP>
          </div>
        ))
      ) : (
        <p>There are no reviews.</p>
      )}
    </>
  );
}
