import React from "react";
import { auth } from "../Utils/firebase";
import {signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../Utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../Utils/Constant";
import { USER_AVATAR } from "../Utils/Constant";

const Header = () => {
const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(store=>store.user);
  console.log(user);
  const handleClick=()=>{

 
signOut(auth).then(() => {
  // Sign-out successful.
  navigate('/');
}).catch((error) => {
  // An error happened.
  navigate('/error')
});

  }

  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
    
        const {uid,email,displayName}=user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate('/Browse');
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate('/');
      }
    });
    return ()=> unsubscribe();
  }, []);



  return (
    <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between" >
      <img className=" w-44 "
        src={LOGO}
        alt="logo"
      />
      <div className="flex p-2">
        <img className=" w-10 h-10 mt-2" src={USER_AVATAR} alt="userIcon" />
        <button className=" text-white m-3" onClick={handleClick}>SignOut</button>
      </div>
    </div>
    

  );
};

export default Header;
