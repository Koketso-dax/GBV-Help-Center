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
      <div className="login__logo">GBV Community Login</div>
      <form action="submit">
        <button className="login__button">Login</button>
      <a href="/" onClick={signIn}>Sign up for free</a>
  );
}

export default Login;
