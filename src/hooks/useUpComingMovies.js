import { API_DATA } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { addUpComingMovies } from "../Utils/MovieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingUpComingMovies = useSelector(
    (store) => store.movie.nowUpComingMovies
  );
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_DATA
    );
    const json = await data.json();

    dispatch(addUpComingMovies(json?.results));
  };

  useEffect(() => {
    !nowPlayingUpComingMovies && getNowPlayingMovie();
  }, []);
};

export default useUpComingMovies;
