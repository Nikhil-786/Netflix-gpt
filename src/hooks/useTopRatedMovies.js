import { API_DATA } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTopRatedList } from "../Utils/MovieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_DATA
    );
    const json = await data.json();
 console.log(json);
    dispatch(addTopRatedList(json?.results));
  };

  useEffect(() => {
    getNowPlayingMovie();
  },[]);
};

export default useTopRatedMovies;
