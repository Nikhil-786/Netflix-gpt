import { API_DATA } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieList } from "../Utils/MovieSlice";
import { useEffect } from "react";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies =useSelector(store=>store.movie.nowPlayingMovies);
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_DATA
    );
    const json = await data.json();

    dispatch(addMovieList(json?.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovie();
  },[]);
};

export default useNowPlaying;
