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
  };
  return (
    <div className="login">
      <div className="logo">GBV Community Login</div>
      <button>Login</button>
      <a href="/">Sign up for free</a>
    </div>
  );
}

export default Login;
