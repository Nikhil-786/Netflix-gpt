import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, gptSearchMovies } = useSelector((store) => store?.gpt);
  if (!movieNames) return;
  return (
    <div className="m-4 p-4 bg-black bg-opacity-70">
      <div>
        {movieNames?.map((movie,index) => (
          <MovieList key={movie}
            title={movie}
            movies={gptSearchMovies[index]}
          ></MovieList>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
