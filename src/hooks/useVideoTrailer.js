import { useEffect } from "react";
import { API_DATA } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../Utils/MovieSlice";

const useVideoTrailer = (movieId) => {
  const dispatch = useDispatch();
  const videoTrailer = useSelector((store) => store.movie.movieTrailer);

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_DATA
    );
    const json = await data.json();

    const filterTrailer = json.results.filter(
      (video) => video?.type === "Trailer"
    );

    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    !videoTrailer && getMovieVideo();
  }, []);
};

export default useVideoTrailer;
