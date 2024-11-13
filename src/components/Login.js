import React, { useRef, useState } from "react";
import Header from "./Header";
import Validate from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { IMG_BG_URL } from "../Utils/Constant";

const Login = () => {
  const [isSignForm, setisSignForm] = useState(true);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const [errorMessage, seterrorMessage] = useState(null);
  const handleClick = () => {
    setisSignForm(!isSignForm);
  };

  const handleSignIn = () => {
    //sent email and password
    const message = Validate(email.current.value, password.current.value);

    seterrorMessage(message);
    if (message) return;

    if (isSignForm) {
      //sign Up logic
 
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
              const {uid,email,displayName}=auth.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        
            })
            .catch((error) => {
              // An error occurred
              // ...

              seterrorMessage(error.message);
            });
          

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign In Logic
 
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={IMG_BG_URL}
          alt="logo"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          action=""
          className="  w-3/12 absolute bg-black p-12 my-24 mx-auto right-0 left-0 text-white bg-opacity-75 "
        >
          <h1 className=" font-bold text-3xl py-4">
            {isSignForm ? "Sign Up" : "Sign In"}
          </h1>
          {isSignForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="py-4 my-4 w-full rounded-md bg-gray-600 bg-opacity-50"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="py-4 my-4 w-full rounded-md bg-gray-600 bg-opacity-50"
          />

          <input
            ref={password}
            type="text"
            placeholder="Password"
            className="py-4 my-4 w-full rounded-md bg-gray-600 bg-opacity-50"
          />
          <p className="text-red-700 font-bold ">{errorMessage}</p>
          <button
            onClick={handleSignIn}
            className="p-4 my-6 w-full bg-red-600 rounded-md"
          >
            {isSignForm ? "Sign Up" : "Sign In"}
          </button>
          <p className=" py-4  cursor-pointer" onClick={handleClick}>
            {isSignForm
              ? "Already a member? Sign In"
              : "New to Netflix? Sign up now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
