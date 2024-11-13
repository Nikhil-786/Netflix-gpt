import { API_DATA } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { addUpComingMovies } from "../Utils/MovieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_DATA
    );
    const json = await data.json();
 console.log(json);
    dispatch(addUpComingMovies(json?.results));
  };

  useEffect(() => {
    getNowPlayingMovie();
  },[]);
};

export default useUpComingMovies;
