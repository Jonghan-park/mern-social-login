import React from "react";
import Google from "../assets/google.png";
import Facebook from "../assets/facebook.png";
import Github from "../assets/github.png";

function Login() {
  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google">
            <img src={Google} alt="google" className="icon" />
            Google
          </div>
          <div className="loginButton facebook">
            <img src={Facebook} alt="facebook" className="icon" />
            Facebook
          </div>
          <div className="loginButton github">
            <img src={Github} alt="github" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">Or</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
