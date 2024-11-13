
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movie);
  const popularMovies =useSelector(store=>store?.movie);
  const topRatedMovies =useSelector(store=>store?.movie);
  const UpComingMovies =useSelector(store=>store?.movie);
console.log(movies);
  return movies.nowPlayingMovies &&(
    <div className=" bg-black">
      <div className="-mt-52 relative z-20">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={topRatedMovies?.nowTopRatedMovies} />
      <MovieList title={"Popular"} movies={popularMovies?.nowPopularMovies} />
      <MovieList title={"Upcoming"} movies={UpComingMovies?.nowUpComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
