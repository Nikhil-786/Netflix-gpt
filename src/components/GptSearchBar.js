import React, { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { OPENAI_GPT_KEY } from "../Utils/Constant";
import { API_DATA } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addMoviesSearchResult } from "../Utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch =useDispatch();

  const getMoviesSearchApi = async (movies) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movies +
        "&include_adult=false&language=en-US&page=1",
      API_DATA
    );
    const json = await data.json();
console.log(json);
    return json.results;
  };

  const handleGptResult = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a movies recommedation system and suggest some movies for the query :" +
      searchText.current.value +
      "Only give me names of 5 moives, comma seperated like tje examples given ahead :don, breaking bad,andaz apna apna, zindagi na milage dobra, masti";
    const genAI = new GoogleGenerativeAI(OPENAI_GPT_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = gptQuery;

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    const gptResult = result.response.text().split(",");
    console.log(gptResult);
    const apiCallSearchResult = gptResult.map((movie) =>
      getMoviesSearchApi(movie)
    );
    const promiseALL = await Promise.all(apiCallSearchResult);
    console.log(promiseALL);
    dispatch(addMoviesSearchResult({movieNames:gptResult, gptSearchMovies:promiseALL}))
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        action=""
        className="w-1/2  bg-black grid grid-cols-12  rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What would you like to watch today?"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptResult}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
