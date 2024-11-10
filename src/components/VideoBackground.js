import React, { useEffect } from 'react'
import { API_DATA } from '../Utils/Constant'
import { useDispatch, useSelector } from 'react-redux'
import { addMovieTrailer } from '../Utils/MovieSlice'

const VideoBackground = () => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector(store=> store.movie?.movieTrailer)
  const getMovieVideo =async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/1034541/videos?language=en-US', API_DATA);
    const json = await data.json();
    console.log(json);
    const filterTrailer =json.results.filter((video)=>video.type==="Trailer")
    console.log(filterTrailer);
    const trailer = filterTrailer.length?filterTrailer[0]:json.results[0];
    dispatch(addMovieTrailer(trailer));

  }

  useEffect(()=>{
    getMovieVideo();

  },[]);
  
    return (  
    <div>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailerVideo.key} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default VideoBackground


