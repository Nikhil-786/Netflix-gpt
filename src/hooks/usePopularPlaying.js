import { API_DATA } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addPopularList } from "../Utils/MovieSlice";
import { useEffect } from "react";

const usePopularPlaying = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_DATA
    );
    const json = await data.json();
 console.log(json);
    dispatch(addPopularList(json?.results));
  };

  useEffect(() => {
    getNowPlayingMovie();
  },[]);
};

export default usePopularPlaying;
