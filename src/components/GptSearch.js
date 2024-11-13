import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { IMG_BG_URL } from "../Utils/Constant";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
       src={IMG_BG_URL}
          alt="logo"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
