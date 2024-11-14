import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    gptSearchMovies: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMoviesSearchResult :(state, action)=> {
      const { movieNames, gptSearchMovies } = action.payload;
      state.movieNames = movieNames;
      state.gptSearchMovies = gptSearchMovies;
    },
  },
});

export const { toggleGptSearchView,addMoviesSearchResult } = gptSlice.actions;

export default gptSlice.reducer;
