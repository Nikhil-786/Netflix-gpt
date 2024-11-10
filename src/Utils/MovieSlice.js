import { createSlice } from "@reduxjs/toolkit";


const MovieSlice = createSlice({
  name: "Movie",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer:null
  },
  reducers: {
    addMovieList(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer(state, action) {
      state.movieTrailer = action.payload;
    },
  },
});

export const {addMovieList,addMovieTrailer} = MovieSlice.actions;
export default MovieSlice.reducer;