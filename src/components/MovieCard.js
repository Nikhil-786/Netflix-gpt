import { IMG_CDN_URL } from "../Utils/Constant"


const MovieCard = ({posterPath}) => {
  console.log(posterPath);
  return (
    <div className="w-48 pr-4">
  <img src={IMG_CDN_URL+posterPath} alt="Movie Title" />

    
  </div>
  )
}

export default MovieCard
