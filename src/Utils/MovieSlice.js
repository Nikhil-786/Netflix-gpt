import { createSlice } from "@reduxjs/toolkit";


const MovieSlice = createSlice({
  name: "Movie",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer:null,
    nowPopularMovies:null,
    nowTopRatedMovies:null,
    nowUpComingMovies:null
  },
  reducers: {
    addMovieList(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    addPopularList(state, action) {
      state.nowPopularMovies = action.payload;
    },
    addTopRatedList(state, action) {
      state.nowTopRatedMovies = action.payload;
    },
    addUpComingMovies(state, action) {
      state.nowUpComingMovies = action.payload;
    },
    addMovieTrailer(state, action) {
      state.movieTrailer = action.payload;
    },
  },
});

export const {addMovieList,addMovieTrailer,addPopularList,addTopRatedList,addUpComingMovies} = MovieSlice.actions;
export default MovieSlice.reducer;