import React from "react";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../Utils/Constant";
import { USER_AVATAR } from "../Utils/Constant";
import { toggleGptSearchView } from "../Utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/Browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchCLick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className=" mx-auto w-44 md:mx-0" src={LOGO} alt="logo" />
      <div className="flex p-2 ">
        <button
          className=" py-2 px-4 mx-4 my-2 bg-purple-800 rounded-xl"
          onClick={handleGptSearchCLick}
        >
          {gptSearch ? "HomePage" : "GptSearch"}
        </button>
        <img className=" w-10 h-10 mt-2" src={USER_AVATAR} alt="userIcon" />
        <button className=" text-white m-3" onClick={handleClick}>
          SignOut
        </button>
      </div>
    </div>
  );
};

export default Header;
