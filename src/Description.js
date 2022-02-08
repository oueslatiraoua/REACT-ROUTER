import React from "react";
import Figure from "react-bootstrap/Figure";
import { useParams } from "react-router-dom";
const Description = ({ movies }) => {
  const { movieId } = useParams();
  const desc = movies.find((m) => m.id === movieId);
  return (
    <div
      style={{
        height: "100vh",
        marginLeft: "500px",
        opacity: "0.7",
        color: "black",
        marginRight: "500px",
        borderRadius: "10px",
        color: "aliceblue",
      }}
    >
      <h1>{desc.title}</h1>
      <Figure.Image width={300} height={300} alt="171x180" src={desc.post} />
      <div style={{ fontSize: "20px" }}>{desc.description}</div>
    </div>
  );
};

export default Description;
