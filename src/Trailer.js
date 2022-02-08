import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import Figure from "react-bootstrap/Figure";
const Trailer = ({ movies }) => {
  const { Id } = useParams();
  const movietrailer = movies.find((m) => m.id === Id);

  return (
    <div style={{ height: "100vh" }}>
      <h1>{movietrailer.title}</h1>

      <Figure.Image
        width={200}
        height={200}
        alt="200x200"
        src={movietrailer.post}
      />
      <center>
        <ReactPlayer url={movietrailer.trailer} />
      </center>
    </div>
  );
};

export default Trailer;
