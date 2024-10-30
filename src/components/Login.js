import React, { useRef, useState } from "react";
import Header from "./Header";
import Validate from "../Utils/Validate";

const Login = () => {
  const [isSignForm, setisSignForm] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, seterrorMessage] = useState(null);
  const handleClick = () => {
    setisSignForm(!isSignForm);
  };

  const handleSignIn = () => {
    //sent email and password
    const message = Validate(email.current.value, password.current.value);
    seterrorMessage(message);
    if(message) return;
    if(!isSignForm){
//sign Up logic
    }
    else{
//sign In Logic
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg"
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
              ? "New to Netflix? Sign up now."
              : "Already a member? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
