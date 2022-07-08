import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";

function Navbar({ user }) {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Login auth
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img src={avatar} alt="" className="avatar" />
          </li>
          <li className="listItem">Joseph Park</li>
          <li className="listItem">Logout</li>
        </ul>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </div>
  );
}

export default Navbar;
