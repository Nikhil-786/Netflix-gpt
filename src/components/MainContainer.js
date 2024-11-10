import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store=>store.movie.nowPlayingMovies);
    if(!movies) return;
    const movieTitle=movies[0];
    const {original_title,overview}=movieTitle;
    
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground/>
    </div>
  )
}

export default MainContainer
