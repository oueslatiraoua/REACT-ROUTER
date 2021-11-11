import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Figure from "react-bootstrap/Figure";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

const MovieCard = ({ Movies }) => {
  return (
    <div className="Card">
      {Movies.map((movie) => (
        <div>
          <Figure.Image
            width={200}
            height={200}
            alt="171x180"
            src={movie.post}
          />
          <h3>{movie.title}</h3>

          <Link to={`/MovieCard/description/${movie.id}`}>
            <button className="btn btn-primary" style={{ margin: "10px" }}>
              Film Description
            </button>
          </Link>
          <br />

          <Link to={`/MovieCard/trailer/${movie.id}`}>
            <button className="btn btn-primary" style={{ margin: "10px" }}>
              Film Trailer
            </button>
          </Link>
          <br />
          <StarRatingComponent
            editing={false}
            starCount={5}
            value={movie.rating}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
