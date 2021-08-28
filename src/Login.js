import React from "react";
import "./Login.css";
// import { auth, provider } from "./firebase";

function Login() {
  const signIn = () => {
    // sign in via firebase
    //  auth
    //    .signInWithPopup(provider)
    //    .then((result) => {
    //      console.log(result);
    //    })
    //    .catch((error) => alert(error.message));
    console.log("Sign in by popup");
  };
  return (
    <div className="login">
      <div className="login__logo">GBV Community Login</div>

      <button className="login__button">Login</button>
      <button onClick={signIn}> Sign up for free</button>
    </div>
  );
}

export default Login;
