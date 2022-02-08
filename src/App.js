import "./App.css";
import "./style.css";
import Addbutton from "./Addbutton";
import MovieCard from "./MovieCard";
import Navbarstyle from "./Navbarstyle.js";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Trailer from "./Trailer";

import Description from "./Description";
const Movies = [
  {
    id: uuidv4(),
    post: " https://m.media-amazon.com/images/M/MV5BMDk0YzAwYjktMWFiZi00Y2FmLWJmMmMtMzUyZDZmMmU5MjkzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg ",
    title: "The invisible guest",
    description:
      " A successful entrepreneur accused of murder and a witness preparation expert have less than three hours to come up with an impregnable defense. ",
    rating: 4,
    trailer: "https://www.youtube.com/watch?v=epCg2RbyF80",
  },

  {
    id: uuidv4(),
    post: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/dbeaba4c14f2b58ec0c3a1a15127bdb682ca0f278264f496195c5132598d52d3._RI_V_TTW_.jpg",
    title: "The girl on the train ",
    description:
      "Rachel catches the same train every morning. It always waits at the same signal, so each day she watches the people who live in one of the houses. Then she sees something shocking. Now Rachel has a chance to become part of the lives she's seen from afar .",
    rating: 3,
    trailer: " https://www.youtube.com/watch?v=LE8-4aRf5VQ ",
  },
  {
    id: uuidv4(),
    post: "https://m.media-amazon.com/images/I/91yxP8raZtL._SL1500_.jpg",
    title: "Speed",
    description:
      "Speed is a 1994 American action thriller film directed by Jan de Bont in his feature film directorial debut. The film stars Keanu Reeves,Sandra Bullock, Joe Morton, and Jeff Daniels and is about a bus that is rigged by a mad bomber to explode if it drops below 50 miles per hour. ",
    rating: 4,
    trailer: "https://www.youtube.com/embed/Fk4A1AY10U0",
  },
];

function App() {
  const [movielist, SetMovieList] = useState(Movies);
  const [rate, setRate] = useState(0);
  const getdata = (data) => {
    SetMovieList([...movielist, data]);
  };
  const [search, SetSearch] = useState("");
  const filter = (data) => {
    SetSearch(data);
  };
  const starate = (data) => {
    setRate(data);
  };
  return (
    <div className="App">
      <Navbarstyle filter={filter} starate={starate} />
      <Routes>
        <Route
          path="/MovieCard/description/:movieId"
          element={<Description movies={movielist} />}
        />
        <Route
          path="/MovieCard/trailer/:Id"
          element={<Trailer movies={movielist} />}
        />
        <Route
          path="/"
          element={
            <>
              <Addbutton getdata={getdata} />
              <MovieCard
                Movies={movielist.filter(
                  (movie) =>
                    movie.title.toLowerCase().includes(search.toLowerCase()) &&
                    movie.rating >= rate
                )}
              />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
