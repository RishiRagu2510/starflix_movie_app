import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./signIn1.css"
export default function SignIn() {
  // State to store the background color
  const [backgroundColor, setBackgroundColor] = useState("#080710");

  return (
    <>
      <style>
        {`
          body {
            background-color: ${backgroundColor};
          }
        `}
      </style>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <Link to="/">
        <button class="Log">Log In</button></Link>
        <Link style={{textDecoration:"none"}}to="/SignUp"><p className="account">Don't have an account</p></Link>
        <p2>Forget Password..?</p2>
      </form>
    </>
  );
}
