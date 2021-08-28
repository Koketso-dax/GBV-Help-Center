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
      <h1>GBV Community Login</h1>
      <button>Login</button>
    </div>
  );
}

export default Login;
