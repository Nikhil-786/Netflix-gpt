import { API_DATA } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addPopularList } from "../Utils/MovieSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const usePopularPlaying = () => {
  const dispatch = useDispatch();
  const nowPopularMovies = useSelector((store) => store.movie.nowPopularMovies);
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_DATA
    );
    const json = await data.json();

    dispatch(addPopularList(json?.results));
  };

  useEffect(() => {
    !nowPopularMovies && getNowPlayingMovie();
  }, []);
};

export default usePopularPlaying;
