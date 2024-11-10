import { API_DATA } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addMovieList } from "../Utils/MovieSlice";
import { useEffect } from "react";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_DATA
    );
    const json = await data.json();
    console.log(json);
    dispatch(addMovieList(json.results));
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};

export default useNowPlaying;
