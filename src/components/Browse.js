
import useNowPlaying from "../hooks/useNowPlaying";
import Header from "./Header";
import MainContainer from "./MainContainer";


const Browse = () => {
useNowPlaying();

  return (
    <div>
      <Header />
      <MainContainer/>
      Browse page
      MainContainer 
       -video backGround
       -video title
       Secondary Container
        -Movie List * n
          -Cards *n
    </div>
  );
};

export default Browse;
